export class Finds {
    constructor() {
        this.findOne = async (item, value, itemSchema, from) => {
            try {
                const filter = { [item]: value };
                const data = await itemSchema.findOne(filter);
                if (!data)
                    if (from != 'register')
                        throw new Error('No data found');
                return data;
            }
            catch (error) {
                console.log(error);
                if (error instanceof Error)
                    throw new Error(`Failed to find ${item}`);
                else
                    throw error;
            }
        };
        this.findMany = async (item, value, itemSchema) => {
            try {
                const filter = { [item]: value };
                const data = await itemSchema.find(filter);
                if (!data)
                    throw new Error('No data found');
                return data;
            }
            catch (error) {
                console.log(error);
                if (error instanceof Error)
                    throw new Error(`Failed to find ${item}`);
                else
                    throw error;
            }
        };
        this.findById = async (item, id, itemSchema) => {
            try {
                const data = await itemSchema.findById(id);
                if (!data)
                    throw new Error('No data found');
                return data;
            }
            catch (error) {
                console.log(error);
                if (error instanceof Error)
                    throw new Error(`Failed to find ${item}`);
                else
                    throw error;
            }
        };
    }
}
//# sourceMappingURL=find.js.map