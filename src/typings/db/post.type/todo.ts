export type TodoDataType = {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
};

export type TodoPostType = {
    todo: string;
};

export type TodoUpdateType = {
    id: number;
    data: {
        todo: string;
        isCompleted: boolean;
    };
};
