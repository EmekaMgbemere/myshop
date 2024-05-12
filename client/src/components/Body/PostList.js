import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from "react-admin";

 const PostList = (props) => {
  return  <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <EmailField source="email" />
            <TextField source="gender" />
            <EditButton basePath='/users'/>
            <DeleteButton basePath='/users'/>
        </Datagrid>
    </List>
};

export default PostList;