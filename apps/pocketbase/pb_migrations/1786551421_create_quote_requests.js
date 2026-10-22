/// <reference path="../pb_data/types.d.ts" />

migrate(
    (app) => {
        let collection;
        try {
            collection = app.findCollectionByNameOrId('quote_requests');
        } catch (_) {
            collection = new Collection({
                type: 'base',
                name: 'quote_requests',
                listRule: null,
                viewRule: null,
                createRule: '',
                updateRule: null,
                deleteRule: null,
                fields: [
                    { name: 'name', type: 'text', required: true, max: 120 },
                    { name: 'email', type: 'email', required: true },
                    { name: 'phone', type: 'text', max: 40 },
                    { name: 'city', type: 'text', max: 120 },
                    { name: 'service', type: 'text', max: 120 },
                    { name: 'budget', type: 'text', max: 60 },
                    { name: 'timeline', type: 'text', max: 60 },
                    { name: 'message', type: 'text', max: 4000 },
                    { name: 'source_page', type: 'text', max: 200 },
                    { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
                    { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
                ],
                indexes: ['CREATE INDEX idx_quote_requests_created ON quote_requests (created)'],
            });
            app.save(collection);
        }
    },
    (app) => {
        try {
            const collection = app.findCollectionByNameOrId('quote_requests');
            app.delete(collection);
        } catch (e) {
            if (String(e.message).includes('no rows in result set')) return;
            throw e;
        }
    },
);
