#!/usr/bin/env node

/**
 * Copyright (c) 2018-present, DK CLI, LLC
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// dkcli is installed globally on people's computers. This means
// that it is extremely difficult to have them upgrade the version and
// because there's only one global version installed, it is very prone to
// breaking changes.
//
// The only job of dkcli is to init the repository and then
// forward all the commands to the local version of dkcli.
//
// The only reason to modify this file is to add more warnings and
// troubleshooting information for the `dkcli` command.
//
// Do not make breaking changes! We absolutely don't want to have to
// tell people to update their global version of dkcli.
//
// Also be careful with new language features.
// This file must work on Node 0.10+.
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//   /!\ DO NOT MODIFY THIS FILE /!\
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

'use strict'

const { init } = require('./dkcli')
const currentNodeVersion = process.versions.node
const semver = currentNodeVersion.split('.')
const major = semver[0]

if (major < 16) {
  console.error(
    'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      'dkcli requires Node 16 or higher. \n' +
      'Please update your version of Node.',
  )
  process.exit(1)
}

init()