'use strict';

const axios = require('axios')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    async afterCreate(result, data) {
        axios.post('https://api.netlify.com/build_hooks/60dd105861cc053650f63857');
    },

    async afterUpdate(result, params, data) {
        axios.post('https://api.netlify.com/build_hooks/60dd105861cc053650f63857');
    },
};
