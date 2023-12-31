import { Command } from "commander";
import path from "path";
import fs from 'fs';
import { exec } from 'child_process';
import { gitignoreContent, indexScssContent, indexScriptTsxContent, indexComponentTsxContent, packageJsonContent, postcssConfigJsContent, tailwindConfigTsContent, torytisEnvDTsContent, tsconfigJsonContent, vscodeSettingsJsonContent, vscodeTailwindJsonContent } from "../functions/file-content";

export function CommandNew(program: Command) {
  program
    .command('new')
    .description('tistory skin 개발을 위한 신규 프로젝트를 생성합니다.')
    .action(async(str, options) => {
      const args = options.args;
      const currentTerminalPath = process.cwd();
      // console.log('@@args', args);

      if (!Array.isArray(args)) {
        console.error(`잘못된 접근입니다.`);
        return;
      }

      if (args.length === 0) {
        console.error(`새로 생성할 프로젝트명을 입력해주세요. ex) torytis new my-project`);
        return;
      }
      
      const projectName = args[0];

      const newRepositoryPath = path.join(currentTerminalPath, projectName);
      if (!fs.existsSync(newRepositoryPath)) {
        fs.mkdirSync(newRepositoryPath);
      }

      // package.json 파일 생성하기
      const packageJsonFilePath = path.join(currentTerminalPath, projectName, 'package.json');
      fs.writeFileSync(packageJsonFilePath, packageJsonContent({ projectName }));

      // tsconfig.json 파일 생성하기
      const tsconfigJsonFilePath = path.join(currentTerminalPath, projectName, 'tsconfig.json');
      fs.writeFileSync(tsconfigJsonFilePath, tsconfigJsonContent());

      // postcss.config.js 파일 생성하기
      const postcssConfigJsFilePath = path.join(currentTerminalPath, projectName, 'postcss.config.js');
      fs.writeFileSync(postcssConfigJsFilePath, postcssConfigJsContent());

      // tailwind.config.ts 파일 생성하기
      const tailwindConfigTsFilePath = path.join(currentTerminalPath, projectName, 'tailwind.config.ts');
      fs.writeFileSync(tailwindConfigTsFilePath, tailwindConfigTsContent());

      // torytis-env.d.ts 파일 생성하기
      const torytisEnvDTsFilePath = path.join(currentTerminalPath, projectName, 'torytis-env.d.ts');
      fs.writeFileSync(torytisEnvDTsFilePath, torytisEnvDTsContent());

      // // global.d.ts 파일 생성하기
      // const typesFolderPath = path.join(currentTerminalPath, projectName, '@types');
      // if (!fs.existsSync(typesFolderPath)) {
      //   fs.mkdirSync(typesFolderPath);
      // }
      // const typesGlobalDTsFilePath = path.join(typesFolderPath, 'global.d.ts');
      // fs.writeFileSync(typesGlobalDTsFilePath, globalDTsContent());
      // fs.writeFileSync(path.join(newRepositoryPath, 'global.d.ts'), globalDTsContent());

      // .gitignore 파일 생성하기
      const gitignoreFilePath = path.join(currentTerminalPath, projectName, '.gitignore');
      fs.writeFileSync(gitignoreFilePath, gitignoreContent());

      // src 폴더 생성하기
      const srcFolderPath = path.join(currentTerminalPath, projectName, 'src');
      if (!fs.existsSync(srcFolderPath)) {
        fs.mkdirSync(srcFolderPath);
      }

      // src/public 폴더 생성하기
      const srcPublicFolderPath = path.join(currentTerminalPath, projectName, 'src', 'public');
      if (!fs.existsSync(srcPublicFolderPath)) {
        fs.mkdirSync(srcPublicFolderPath);
      }

      // src/index.component.tsx 파일 생성하기
      const indexComponentTsxFilePath = path.join(currentTerminalPath, projectName, 'src', 'index.component.tsx');
      if (!fs.existsSync(indexComponentTsxFilePath)) {
        fs.writeFileSync(indexComponentTsxFilePath, indexComponentTsxContent());
      }

      // src/index.scss 파일 생성하기
      const indexScssFilePath = path.join(currentTerminalPath, projectName, 'src', 'index.scss');
      if (!fs.existsSync(indexScssFilePath)) {
        fs.writeFileSync(indexScssFilePath, indexScssContent());
      }

      // src/index.script.tsx 파일 생성하기
      const indexScriptTsxFilePath = path.join(currentTerminalPath, projectName, 'src', 'index.script.tsx');
      if (!fs.existsSync(indexScriptTsxFilePath)) {
        fs.writeFileSync(indexScriptTsxFilePath, indexScriptTsxContent());
      }

      // .vscode 폴더 생성하기
      const vscodeFolderPath = path.join(currentTerminalPath, projectName, '.vscode');
      if (!fs.existsSync(vscodeFolderPath)) {
        fs.mkdirSync(vscodeFolderPath);
      }

      // .vscode/settings.json 파일 생성하기
      const vscodeSettingsJsonFilePath = path.join(currentTerminalPath, projectName, '.vscode', 'settings.json');
      if (!fs.existsSync(vscodeSettingsJsonFilePath)) {
        fs.writeFileSync(vscodeSettingsJsonFilePath, vscodeSettingsJsonContent());
      }

      // .vscode/tailwind.json 파일 생성하기
      const vscodeTailwindJsonFilePath = path.join(currentTerminalPath, projectName, '.vscode', 'tailwind.json');
      if (!fs.existsSync(vscodeTailwindJsonFilePath)) {
        fs.writeFileSync(vscodeTailwindJsonFilePath, vscodeTailwindJsonContent());
      }

      // npm install 진행하기
      await new Promise(function(resolve, reject) {
        exec(`npm install --prefix ${newRepositoryPath}`, (error, stdout, stderr) => {
          resolve(true);
        });
      }); 
    })  
  ;
}
