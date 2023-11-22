export class Creates {
    constructor() {
        this.create = async (item, value, itemSchema) => {
            try {
                const data = new itemSchema(value);
                if (!data)
                    throw new Error('No data found');
                const saveData = await data.save();
                return saveData;
            }
            catch (error) {
                console.log(error);
                if (error instanceof Error)
                    throw new Error(`Failed to create ${item}`);
                else
                    throw error;
            }
        };
    }
}
//# sourceMappingURL=create.js.map