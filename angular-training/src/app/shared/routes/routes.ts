import { Routes } from '@angular/router';


export const content: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'eCommerce',
        loadChildren: () => import('../../components/ecommerce/ecommerce.module').then(m => m.ECommerceModule)
    },
    {
        path: 'crypto-currencies',
        loadChildren: () => import('../../components/crypto-currencies/crypto-currencies.module').then(m => m.CryptoCurrenciesModule)
    },
    {
        path: 'elements',
        loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
    },
    {
        path: 'advanced-ui',
        loadChildren: () => import('../../components/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)
    },
    {
        path: 'apps',
        loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule)
    },
    {
        path: 'tables',
        loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule)
    },
    {
        path: 'icons',
        loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'forms',
        loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormModule)
    },
    {
        path: 'charts',
        loadChildren: () => import('../../components/chart/chart.module').then(m => m.ChartModule)
    },
    {
        path: 'pages',
        loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'utilities',
        loadChildren: () => import('../../components/utilities/utilities.module').then(m => m.UtilitiesModule)
    },
    {
        path: 'category-management',
        loadChildren: () => import('../../pages/category-management/category.module').then(m => m.CategoryModule)
    },
    {
        path: 'product-management',
        loadChildren: () => import('../../pages/product-management/product.module').then(m => m.ProductModule)
    },
    {
        path: 'category-mapping-management',
        loadChildren: () => import('../../pages/category-mapping-management/category-mapping.module').then(m => m.CategoryMappingModule)
    },
    {
        path: 'training',
        loadChildren: () => import('../../pages/angular-training/angular-training.module').then(m => m.AngularTrainingModule)
    },
    { path: 'day-two', loadChildren: () => import('../../pages/day2/day2.module').then(m => m.Day2Module) },
];
