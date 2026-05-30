import projectsApplication from '@site/src/data/projects-application.json';
import projectsScancode from '@site/src/data/projects-scancode.json';
import projectsPackageUrl from '@site/src/data/projects-package-url.json';
import projectsInspectors from '@site/src/data/projects-inspectors.json';
import projectsLibraries from '@site/src/data/projects-libraries.json';
import {
    clearlyDefinedProject,
    packageUrlProject,
} from '@site/src/data/projects-featured';

export const allProjectSources = [
    {
        id: 'application-projects',
        title: 'Apps for software supply chains',
        data: [...projectsApplication, clearlyDefinedProject],
    },
    {
        id: 'scancode-projects',
        title: 'Scan code with ScanCode',
        data: projectsScancode,
    },
    {
        id: 'purl-projects',
        title: 'Data keyed by Package-URL (PURL)',
        data: [packageUrlProject, ...projectsPackageUrl],
    },
    {
        id: 'inspectors',
        title: 'Specialized inspector utilities',
        data: projectsInspectors,
    },
    {
        id: 'libraries',
        title: 'Libraries and building blocks',
        data: projectsLibraries,
    },
];
