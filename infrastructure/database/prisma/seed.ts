import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('[Seed] Initializing database seed for Ultron platform...');

  const adminEmail = 'admin@ultron.ai';
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash('UltronAdmin2026!', 10);
    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        name: 'Ultron Master Administrator',
        role: 'ADMIN',
        isVerified: true
      }
    });

    console.log(`[Seed] Created Master Administrator: ${admin.email}`);

    // Create Default Memories
    await prisma.memory.createMany({
      data: [
        { userId: admin.id, layer: 'SHORT_TERM', isEnabled: true },
        { userId: admin.id, layer: 'SESSION', isEnabled: true },
        { userId: admin.id, layer: 'LONG_TERM', isEnabled: true },
        { userId: admin.id, layer: 'TASK', isEnabled: true }
      ]
    });

    console.log('[Seed] Initialized 4-Tier Memory layers for Administrator.');

    // Seed default safe permissions
    await prisma.permission.createMany({
      data: [
        { userId: admin.id, resource: 'tool:calculator', action: 'execute', level: 'READ_ONLY' },
        { userId: admin.id, resource: 'tool:datetime', action: 'execute', level: 'READ_ONLY' },
        { userId: admin.id, resource: 'tool:web_search', action: 'execute', level: 'LOW_RISK' },
        { userId: admin.id, resource: 'tool:file_manager', action: 'delete', level: 'HIGH_RISK' },
        { userId: admin.id, resource: 'tool:system_control', action: 'command', level: 'USER_CONFIRMATION_REQUIRED' }
      ]
    });

    console.log('[Seed] Configured default tool permission boundaries.');
  } else {
    console.log('[Seed] Administrator account already present. Skipping.');
  }

  console.log('[Seed] Database seed completed successfully.');
}

main()
  .catch((e) => {
    console.error('[Seed Error]', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
