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
            const { data } = await axios.get(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShtepin1`, {
                headers: { 'x-auth-token': accessToken }
            });
            if (data.success) setList(data.data);
        } catch (err) {
            setList([]);
        }
    }, []);

    async function deleteHandler(id) {
        const { data } = await axios.delete(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShtepin1/${id}`, {
            headers: { 'x-auth-token': accessToken }
        });
        if (data.success) setList(list.filter(e => e._id !== id));
    }

    async function updateHandler(e, id) {
        e.preventDefault();
        const { data } = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShtepin1/${id}`, editItem, {
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
                                <form action={`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShtepin1/${row._id}`} onSubmit={(e) => updateHandler(e, row._id)}>
                                    <Input type="text" name='constructionCategory' defaultValue={row.constructionCategory} onChange={(e) => setEditItem({ ...editItem, constructionCategory: e.target.value })} />
                                    <Input type="text" name='object' defaultValue={row.object} onChange={(e) => setEditItem({ ...editItem, object: e.target.value })} />
                                    <Input type="text" name='seizmikZone' defaultValue={row.seizmikZone} onChange={(e) => setEditItem({ ...editItem, seizmikZone: e.target.value })} />
                                    <Input type="text" name='value' defaultValue={row.value} onChange={(e) => setEditItem({ ...editItem, value: e.target.value })} />
                                    <Input type="text" name='gadgeets' defaultValue={row.gadgeets} onChange={(e) => setEditItem({ ...editItem, gadgeets: e.target.value })} />
                                    <Input type="text" name='lived' defaultValue={row.lived} onChange={(e) => setEditItem({ ...editItem, lived: e.target.value })} />
                                    <Input type="text" name='insuranceStart' defaultValue={row.insuranceStart} onChange={(e) => setEditItem({ ...editItem, insuranceStart: e.target.value })} />
                                    <Input type="text" name='earhquace' defaultValue={row.earhquace} onChange={(e) => setEditItem({ ...editItem, earhquace: e.target.value })} />
                                    <Input type="text" name='earthquaceFee' defaultValue={row.earthquaceFee} onChange={(e) => setEditItem({ ...editItem, earthquaceFee: e.target.value })} />
                                    <Input type="text" name='heavyDoors' defaultValue={row.heavyDoors} onChange={(e) => setEditItem({ ...editItem, heavyDoors: e.target.value })} />
                                    <Input type="text" name='otherInsurance' defaultValue={row.otherInsurance} onChange={(e) => setEditItem({ ...editItem, otherInsurance: e.target.value })} />
                                    <Input type="text" name='clientFee' marginBottom={'30px'} defaultValue={row.clientFee} onChange={(e) => setEditItem({ ...editItem, clientFee: e.target.value })} />
                                    <Button bg={'yellow.400'} color={'white'} width={'100px'} type={'submit'}>Save</Button>
                                </form>

                            </li>
                        )

                        return (
                            <li key={row._id} style={{ 'marginBottom': '20px', 'marginTop': '30px' }}>
                                <Input type="text" name='constructionCategory' defaultValue={row.constructionCategory} disabled />
                                <Input type="text" name='object' defaultValue={row.object} disabled />
                                <Input type="text" name='seizmikZone' defaultValue={row.seizmikZone} disabled />
                                <Input type="text" name='value' defaultValue={row.value} disabled />
                                <Input type="text" name='gadgeets' defaultValue={row.gadgeets} disabled />
                                <Input type="text" name='lived' defaultValue={row.lived} disabled />
                                <Input type="text" name='insuranceStart' defaultValue={row.insuranceStart} disabled />
                                <Input type="text" name='earhquace' defaultValue={row.earhquace} disabled />
                                <Input type="text" name='earthquaceFee' defaultValue={row.earthquaceFee} disabled />
                                <Input type="text" name='heavyDoors' defaultValue={row.heavyDoors} disabled />
                                <Input type="text" name='otherInsurance' defaultValue={row.otherInsurance} disabled />
                                <Input type="text" name='clientFee' marginBottom={'30px'} defaultValue={row.clientFee} disabled />
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