/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Project',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-check',
                link: '/dashboards/project'
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        type: 'aside',
        icon: 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        type: 'aside',
        icon: 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];