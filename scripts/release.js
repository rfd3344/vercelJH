#!/usr/bin/env node

const { execSync } = require('node:child_process');


function run(cmd) {
  console.log(`→ ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

try {
  run(`npm version patch --no-git-tag-version`);
  run('git add .');
  run('git commit -m "chore: release v$(node -p "require(\'./package.json\').version")"');
  // run('git push');

  console.log(`✅ Released`);
} catch (err) {
  console.error('❌ Release failed');
  process.exit(1);
}