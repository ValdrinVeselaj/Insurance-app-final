import {
    Button,
    Container,
    Input,
    FormLabel
} from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LandinPage() {
    const [list, setList] = useState([]);
    const [editItem, setEditItem] = useState({});
    const accessToken = localStorage.getItem('accessToken');
    // namelastName, modelType, phone, plateNumber
    let navigate = useNavigate();

    useEffect(async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShendetin1`, {
                headers: { 'x-auth-token': accessToken }
            });
            if (data.success) setList(data.data);
        } catch (err) {
            setList([]);
        }
    }, []);

    async function deleteHandler(id) {
        const { data } = await axios.delete(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShendetin1/${id}`, {
            headers: { 'x-auth-token': accessToken }
        });
        if (data.success) setList(list.filter(e => e._id !== id));
    }

    async function updateHandler(e, id) {
        e.preventDefault();
        const { data } = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShendetin1/${id}`, editItem, {
            headers: { 'x-auth-token': accessToken }
        });
        const index = list.findIndex(item => item._id !== id);
        const editedItem = { ...list[index], ...editItem, toEdit: false };
        const newList = [
            list.slice(0, index),
            editedItem,
            list.slice(index + 1)
        ].flat();
        // console.log(newList);
        // if(data.success) setList(newList);
        // setEditRow(null);
        navigate(0);
    }

    async function setEditRow(id) {
        const updatedList = list.map(item => {
            if (item._id === id) item.toEdit = true;
            else item.toEdit = false;
            return item;
        });
        setList(updatedList);
        setEditItem(list.find(item => item._id === id));
    }

    return (
        <Container minH={'100vh'} align={'center'}>
            <ul>
                {
                    list.map(row => {
                        if (row.toEdit) return (
                            <li key={row._id} style={{ 'marginBottom': '20px', 'marginTop': '30px' }}>
                                <form action={`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShendetin1/${row._id}`} onSubmit={(e) => updateHandler(e, row._id)}>
                                    <Input type="text" name='namelastName' defaultValue={row.namelastName} onChange={(e) => setEditItem({ ...editItem, namelastName: e.target.value })} />
                                    <Input type="text" name='idNumber' defaultValue={row.idNumber} onChange={(e) => setEditItem({ ...editItem, idNumber: e.target.value })} />
                                    <Input type="text" name='phone' defaultValue={row.phone} onChange={(e) => setEditItem({ ...editItem, phone: e.target.value })} />
                                    <Input type="text" name='email' defaultValue={row.email} onChange={(e) => setEditItem({ ...editItem, email: e.target.value })} />
                                    <Input type="text" name='adress' defaultValue={row.adress} onChange={(e) => setEditItem({ ...editItem, adress: e.target.value })} />
                                    <Input type="text" name='city' defaultValue={row.city} onChange={(e) => setEditItem({ ...editItem, city: e.target.value })} />
                                    <Input type="text" name='dateOfBirth' defaultValue={row.dateOfBirth} onChange={(e) => setEditItem({ ...editItem, dateOfBirth: e.target.value })} />
                                    <Input type="text" name='country' marginBottom={'30px'} defaultValue={row.country} onChange={(e) => setEditItem({ ...editItem, country: e.target.value })} />
                                    <Button bg={'yellow.400'} color={'white'} width={'100px'} type={'submit'}>Save</Button>
                                </form>

                            </li>
                        )

                        return (
                            <li key={row._id} style={{ 'marginBottom': '20px', 'marginTop': '30px' }}>
                                <Input type="text" name='namelastName' defaultValue={row.namelastName} disabled />
                                <Input type="text" name='idNumber' defaultValue={row.idNumber} disabled />
                                <Input type="text" name='phone' defaultValue={row.phone} disabled />
                                <Input type="text" name='email' defaultValue={row.email} disabled />
                                <Input type="text" name='adress' defaultValue={row.adress} disabled />
                                <Input type="text" name='city' defaultValue={row.city} disabled />
                                <Input type="text" name='country' defaultValue={row.country} disabled />
                                <Input type="text" name='dateOfBirth' marginBottom={'30px'} defaultValue={row.dateOfBirth} disabled />
                                <Button bg={'blue.400'} color={'white'} width={'100px'} onClick={() => setEditRow(row._id)}>Edit</Button>
                                <Button bg={'red'} color={'white'} width={'100px'} onClick={() => deleteHandler(row._id)}>Delete</Button>
                            </li>
                        )
                    })
                }
            </ul>
        </Container>
    );
}