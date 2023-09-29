#!/usr/bin/env node
import { Command } from 'commander';
import { version } from '../package.json';
import { CommandNew } from './commands/new';
const program = new Command();

program
  .name('torytis-create-app')
  .description('torytis는 tistory 블로그 스킨을 보다 더 편리하게 만들 수 있도록 도와주는 툴입니다.')
  .version(version)
;

CommandNew(program);

program.parse();

