<?php

$vendorDir = dirname(__DIR__);
$rootDir = dirname(dirname(__DIR__));

return array (
  'sebastianlenz/linkfield' => 
  array (
    'class' => 'typedlinkfield\\Plugin',
    'basePath' => $vendorDir . '/sebastianlenz/linkfield/src',
    'handle' => 'typedlinkfield',
    'aliases' => 
    array (
      '@typedlinkfield' => $vendorDir . '/sebastianlenz/linkfield/src',
    ),
    'name' => 'Typed link field',
    'version' => '1.0.19',
    'description' => 'A Craft field type for selecting links',
    'developer' => 'Sebastian Lenz',
    'developerUrl' => 'https://github.com/sebastian-lenz/',
  ),
  'craftcms/redactor' => 
  array (
    'class' => 'craft\\redactor\\Plugin',
    'basePath' => $vendorDir . '/craftcms/redactor/src',
    'handle' => 'redactor',
    'aliases' => 
    array (
      '@craft/redactor' => $vendorDir . '/craftcms/redactor/src',
    ),
    'name' => 'Redactor',
    'version' => '2.3.3.2',
    'description' => 'Edit rich text content in Craft CMS using Redactor by Imperavi.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/redactor/blob/v2/README.md',
  ),
  'fatfish/navigation' => 
  array (
    'class' => 'fatfish\\navigation\\Navigation',
    'basePath' => $vendorDir . '/fatfish/navigation/src',
    'handle' => 'craftnavigation',
    'aliases' => 
    array (
      '@fatfish/navigation' => $vendorDir . '/fatfish/navigation/src',
    ),
    'name' => 'CraftNavigation',
    'version' => '1.0.7',
    'description' => 'Craft navigation for the website.',
    'developer' => 'Fatfish',
    'developerUrl' => 'https://fatfish.com.au',
    'documentationUrl' => 'https://github.com/https://github.com/fatfishdigital/navigation/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/https://github.com/fatfishdigital/navigation/master/CHANGELOG.md',
    'hasCpSettings' => true,
    'hasCpSection' => true,
    'components' => 
    array (
      'navigationService' => 'fatfish\\navigation\\services\\NavigationService',
    ),
  ),
);
