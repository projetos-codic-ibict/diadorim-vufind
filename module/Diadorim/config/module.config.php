<?php

return array (
  'vufind' => 
  array (
    'plugin_managers' => 
    array (
      'recorddriver' => 
      array (
        'factories' => 
        array (
          'Diadorim\\RecordDriver\\SolrDefault' => 'VuFind\\RecordDriver\\SolrDefaultFactory',
        ),
        'aliases' => 
        array (
          'VuFind\\RecordDriver\\SolrDefault' => 'Diadorim\\RecordDriver\\SolrDefault',
        ),
      ),
    ),
  ),
  'controllers' => 
  array (
    'factories' => 
    array (
      'Diadorim\\Controller\\SobreController' => 'VuFind\\Controller\\AbstractBaseFactory',
      'Diadorim\\Controller\\BulkExportController' => 'VuFind\\Controller\\AbstractBaseFactory',
      'Diadorim\\Controller\\LogomarcasController' => 'VuFind\\Controller\\AbstractBaseFactory',
      'Diadorim\\Controller\\CriteriosController' => 'VuFind\\Controller\\AbstractBaseFactory',
    ),
    'aliases' => 
    array (
      'Sobre' => 'Diadorim\\Controller\\SobreController',
      'sobre' => 'Diadorim\\Controller\\SobreController',
      'BulkExport' => 'Diadorim\\Controller\\BulkExportController',
      'bulkexport' => 'Diadorim\\Controller\\BulkExportController',
      'Logomarcas' => 'Diadorim\\Controller\\LogomarcasController',
      'logomarcas' => 'Diadorim\\Controller\\LogomarcasController',
      'Criterios' => 'Diadorim\\Controller\\CriteriosController',
      'criterios' => 'Diadorim\\Controller\\CriteriosController',
    ),
  ),
  'router' => 
  array (
    'routes' => 
    array (
      'sobre-home' => 
      array (
        'type' => 'Laminas\\Router\\Http\\Literal',
        'options' => 
        array (
          'route' => '/Sobre/Home',
          'defaults' => 
          array (
            'controller' => 'Sobre',
            'action' => 'Home',
          ),
        ),
      ),
      'bulkexport-home' => 
      array (
        'type' => 'Laminas\\Router\\Http\\Literal',
        'options' => 
        array (
          'route' => '/bulkexport/home',
          'defaults' => 
          array (
            'controller' => 'BulkExport',
            'action' => 'Home',
          ),
        ),
      ),
      'bulkexport-csv' => 
      array (
        'type' => 'Laminas\\Router\\Http\\Literal',
        'options' => 
        array (
          'route' => '/bulkexport/csv',
          'defaults' => 
          array (
            'controller' => 'BulkExport',
            'action' => 'CSV',
          ),
        ),
      ),
      'bulkexport-download' => 
      array (
        'type' => 'Laminas\\Router\\Http\\Literal',
        'options' => 
        array (
          'route' => '/bulkexport/download',
          'defaults' => 
          array (
            'controller' => 'BulkExport',
            'action' => 'Download',
          ),
        ),
      ),
      'logomarcas-home' => 
      array (
        'type' => 'Laminas\\Router\\Http\\Literal',
        'options' => 
        array (
          'route' => '/Logomarcas/Home',
          'defaults' => 
          array (
            'controller' => 'Logomarcas',
            'action' => 'Home',
          ),
        ),
      ),
      'criterios-home' => 
      array (
        'type' => 'Laminas\\Router\\Http\\Literal',
        'options' => 
        array (
          'route' => '/Criterios/Home',
          'defaults' => 
          array (
            'controller' => 'Criterios',
            'action' => 'Home',
          ),
        ),
      ),
    ),
  ),
);