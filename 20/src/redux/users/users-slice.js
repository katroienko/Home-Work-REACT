import { createSlice } from "@reduxjs/toolkit";

import { nanoid } from 'nanoid'


const usersSlice = createSlice({
  name: 'users',
  initialState: [
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      age: 25,
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com',
      age: 30,
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: 3,
      name: 'Charlie',
      email: 'charlie@example.com',
      age: 28,
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: 4,
      name: 'Diana',
      email: 'diana@example.com',
      age: 32,
      avatar: 'https://i.pravatar.cc/150?img=4'
    }
  ],
  reducers: {
    addUser: {
      reducer: (store, { payload }) => [...store, payload],
      prepare: data => {
        const randomAvatarId = Math.floor(Math.random() * 70) + 1;
        return {
          payload: {
            id: nanoid(),
            avatar: `https://i.pravatar.cc/150?img=${randomAvatarId}`,
            ...data,
          }
        }
      }
    }

  }

});

export const { addUser } = usersSlice.actions;
// console.log(usersSlice);


export default usersSlice.reducer;