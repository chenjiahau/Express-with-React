import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'task/login',
  async (account) => {
    const response = await fetch(`tasks/${account}`);
    const tasks = await response.json();
    return { account, tasks };
  }
);

const initialStateTask = {
  logs: [],
  isLoading: false,
  isLogin: false,
  account: '',
  tasks: [
  ],
};

const taskSlice = createSlice({
  name: 'task',
  initialState: initialStateTask,
  reducers: {
    log: (state, action) => {
      state.logs.push(action.payload);
    },
    loading: (state) => {
      state.isLoading = true;
    },
    addTask: (state, action) => {
      state.isLoading = false;
      state.tasks = [
        ...state.tasks,
        { id: Date.now(), title: action.payload },
      ];
    },
    deleteTask: (state, action) => {
      state.isLoading = false;
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogin = true;
        state.account = action.payload.account;
        state.tasks = [
          ...state.tasks,
          ...action.payload.tasks,
        ];
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { log, loading, addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

export const getIsLoading = (state) => state.task.isLoading;
export const getIsLogin = (state) => state.task.isLogin;
export const getTasks = (state) => state.task.tasks;