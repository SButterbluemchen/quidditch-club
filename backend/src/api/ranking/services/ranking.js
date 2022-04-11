'use strict';

/**
 * ranking service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ranking.ranking');
