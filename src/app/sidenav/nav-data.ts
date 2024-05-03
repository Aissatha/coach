

export const navbarData : INavbarData []= [
    {
        routelink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard',
    },
    {
        routelink: 'products',
        icon: 'fal fa-store',
        label: 'Products',
    },
    {
        routelink: 'offres',
        icon: 'fal fa-coins',
        label: 'Offres',
        items:[
            {
                routeLink: "offres/list",
                label:"List offres"
            }
            {
                routeLink: "offres/create",
                label:"Create  offres"
            }
        ]
    },
    {
        routelink: 'programme',
        icon: 'fal fa-tags',
        label: 'Programme',
    },
    {
        routelink: 'statistics',
        icon: 'fal fa-chart-bar',
        label: 'Statistics',
    },
    {
        routelink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
    },
    {
        routelink: 'media',
        icon: 'fal fa-camera',
        label: 'Media',
    },

   

];