export const deleteOne = async (item, value, Schema) => {
    try {
        const data = await Schema.deleteOne({ [item]: value }, { new: true });
        if (!data)
            throw new Error('No data found');
        return { message: `${item} succesfully deleted` };
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error)
            throw new Error(`Failed to delete ${item}`);
        else
            throw error;
    }
};
export const deleteMany = async (item, value, Schema) => {
    try {
        const data = await Schema.deleteMany({ [item]: value }, { new: true });
        if (!data)
            throw new Error('No data found');
        return { message: `${item} succesfully deleted` };
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error)
            throw new Error(`Failed to delete ${item}`);
        else
            throw error;
    }
};
//# sourceMappingURL=delete.js.map