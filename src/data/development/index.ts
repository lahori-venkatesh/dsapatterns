import { LanguageProblem } from '../../types';
import { html5Problems } from './html5';
import { css3Problems } from './css3';
import { javascriptProblems } from './javascript';
import { typescriptProblems } from './typescript';
import { reactProblems } from './react';
import { nodejsProblems } from './nodejs';
import { databaseProblems } from './database';
import { securityProblems } from './security';
import { systemDesignProblems } from './systemDesign';
import { nextjsProblems } from './nextjs';
import { stateManagementProblems } from './stateManagement';
import { tailwindProblems } from './tailwind';
import { apiProblems } from './api';
import { testingProblems } from './testing';
import { devopsProblems } from './devops';
import { performanceProblems } from './performance';
import { expressjsProblems } from './expressjs';
import { springBootProblems } from './springBoot';
import { pythonProblems } from './python';
import { viteProblems } from './vite';
import { webpackProblems } from './webpack';
import { websocketsProblems } from './websockets';
import { networkingProblems } from './networking';
import { dbmsProblems } from './dbms';
import { osProblems } from './os';
import { computerNetworksProblems } from './computerNetworks';

export const allDevelopmentProblems: LanguageProblem[] = [
  ...html5Problems,
  ...css3Problems,
  ...javascriptProblems,
  ...typescriptProblems,
  ...reactProblems,
  ...nodejsProblems,
  ...databaseProblems,
  ...securityProblems,
  ...systemDesignProblems,
  ...nextjsProblems,
  ...stateManagementProblems,
  ...tailwindProblems,
  ...apiProblems,
  ...testingProblems,
  ...devopsProblems,
  ...performanceProblems,
  ...expressjsProblems,
  ...springBootProblems,
  ...pythonProblems,
  ...viteProblems,
  ...webpackProblems,
  ...websocketsProblems,
  ...networkingProblems,
  ...dbmsProblems,
  ...osProblems,
  ...computerNetworksProblems
];
