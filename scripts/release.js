#!/usr/bin/env node

const { execSync } = require('node:child_process');


function run(cmd) {
  console.log(`→ ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

try {
  run(`npm version patch --no-git-tag-version`);
  run('git add .');
  const a = execSync('node -p "require(\'./package.json\').version"', { stdio: 'pipe' })
  console.log('a:', a);
  const version = execSync('node -p "require(\'./package.json\').version"', { stdio: 'pipe' }).toString().trim();
  run(`git commit -m "chore: release v${version}"`);
  // run('git push');

  console.log(`✅ Release v${version}`);
} catch (err) {
  console.error('❌ Release failed');
  process.exit(1);
}