#!/usr/bin/env node

const { execSync } = require('node:child_process');

// const versionType = process.argv[2] || 'patch';

function run(cmd) {
  console.log(`→ ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

try {

  run('git add .');
  run(`npm version patch --no-git-tag-version`);
  run('git commit -m "chore: release v$(node -p "require(\'./package.json\').version")"');
  run('git push');
  run('git push --tags');

  console.log(`✅ Released`);
} catch (err) {
  console.error('❌ Release failed');
  process.exit(1);
}