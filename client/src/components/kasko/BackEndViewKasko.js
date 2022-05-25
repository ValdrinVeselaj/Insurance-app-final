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
        const { data } = await axios.get(`${process.env.REACT_APP_API_BASEURL}/api/items/kasko`, {
          headers: { 'x-auth-token': accessToken }
        });
        if (data.success) setList(data.data);
      } catch (err) {
        setList([]);
      }
    }, []);
  
    async function deleteHandler(id) {
      const { data } = await axios.delete(`${process.env.REACT_APP_API_BASEURL}/api/items/kasko/${id}`, {
        headers: { 'x-auth-token': accessToken }
      });
      if (data.success) setList(list.filter(e => e._id !== id));
    }
  
    async function updateHandler(e, id) {
      e.preventDefault();
      const { data } = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/kasko/${id}`, editItem, {
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
                  <form action={`${process.env.REACT_APP_API_BASEURL}/api/items/kasko/${row._id}`} onSubmit={(e) => updateHandler(e, row._id)}>
                    <Input type="text" name='namelastName' defaultValue={row.namelastName} onChange={(e) => setEditItem({ ...editItem, namelastName: e.target.value })} />
                    <Input type="text" name='modelType' defaultValue={row.modelType} onChange={(e) => setEditItem({ ...editItem, modelType: e.target.value })} />
                    <Input type="text" name='phone' defaultValue={row.phone} onChange={(e) => setEditItem({ ...editItem, phone: e.target.value })} />
                    <Input type="text" name='plateNumber' defaultValue={row.plateNumber} onChange={(e) => setEditItem({ ...editItem, plateNumber: e.target.value })} />
                    <Input type="text" name='coverage' defaultValue={row.coverage} onChange={(e) => setEditItem({ ...editItem, coverage: e.target.value })} />
                    <Input type="text" name='insured' defaultValue={row.insured} onChange={(e) => setEditItem({ ...editItem, insured: e.target.value })} />
                    <Input type="text" name='adress' defaultValue={row.adress} onChange={(e) => setEditItem({ ...editItem, adress: e.target.value })} />
                    <Input type="text" name='reprezantive' defaultValue={row.reprezantive} onChange={(e) => setEditItem({ ...editItem, reprezantive: e.target.value })} />
                    <Input type="text" name='dateOfBirth' defaultValue={row.dateOfBirth} onChange={(e) => setEditItem({ ...editItem, dateOfBirth: e.target.value })} />
                    <Input type="text" name='profession' defaultValue={row.profession} onChange={(e) => setEditItem({ ...editItem, profession: e.target.value })} />
                    <Input type="text" name='deshmiAftesie' defaultValue={row.deshmiAftesie} onChange={(e) => setEditItem({ ...editItem, deshmiAftesie: e.target.value })} />
                    <Input type="text" name='gender' defaultValue={row.gender} onChange={(e) => setEditItem({ ...editItem, gender: e.target.value })} />
                    <Input type="text" name='accidents' defaultValue={row.accidents} onChange={(e) => setEditItem({ ...editItem, accidents: e.target.value })} />
                    <Input type="text" name='accidentNumber' defaultValue={row.accidentNumber} onChange={(e) => setEditItem({ ...editItem, accidentNumber: e.target.value })} />
                    <Input type="text" name='fault' defaultValue={row.fault} onChange={(e) => setEditItem({ ...editItem, fault: e.target.value })} />
                    <Input type="text" name='driversLicenceTime' defaultValue={row.driversLicenceTime} onChange={(e) => setEditItem({ ...editItem, driversLicenceTime: e.target.value })} />
                    <Input type="text" name='carUsage' defaultValue={row.carUsage} onChange={(e) => setEditItem({ ...editItem, carUsage: e.target.value })} />
                    <Input type="text" name='chassisNumber' defaultValue={row.chassisNumber} onChange={(e) => setEditItem({ ...editItem, chassisNumber: e.target.value })} />
                    <Input type="text" name='engineDisplacement' defaultValue={row.engineDisplacement} onChange={(e) => setEditItem({ ...editItem, engineDisplacement: e.target.value })} />
                    <Input type="text" name='value' defaultValue={row.value} onChange={(e) => setEditItem({ ...editItem, value: e.target.value })} />
                    <Input type="text" name='alarm' defaultValue={row.alarm} onChange={(e) => setEditItem({ ...editItem, alarm: e.target.value })} />
                    <Input type="text" name='rental' defaultValue={row.rental} onChange={(e) => setEditItem({ ...editItem, rental: e.target.value })} />
                    <Input type="text" name='fuelEconomy' defaultValue={row.fuelEconomy} onChange={(e) => setEditItem({ ...editItem, fuelEconomy: e.target.value })} />
                    <Input type="text" name='kmPerYear' defaultValue={row.kmPerYear} onChange={(e) => setEditItem({ ...editItem, kmPerYear: e.target.value })} />
                    <Input type="text" name='brand' defaultValue={row.brand} onChange={(e) => setEditItem({ ...editItem, brand: e.target.value })} />
                    <Input type="text" name='color' defaultValue={row.color} onChange={(e) => setEditItem({ ...editItem, color: e.target.value })} />
                    <Input type="text" name='seats' defaultValue={row.seats} onChange={(e) => setEditItem({ ...editItem, seats: e.target.value })} />
                    <Input type="text" name='year' defaultValue={row.year} onChange={(e) => setEditItem({ ...editItem, year: e.target.value })} />
                    <Input type="text" name='insuredPrice' defaultValue={row.insuredPrice} onChange={(e) => setEditItem({ ...editItem, insuredPrice: e.target.value })} />
                    <Input type="text" name='carParking' defaultValue={row.carParking} onChange={(e) => setEditItem({ ...editItem, carParking: e.target.value })} />
                    <Input type="text" name='fuelType' defaultValue={row.fuelType} onChange={(e) => setEditItem({ ...editItem, fuelType: e.target.value })} />
                    <Input type="text" name='kmCrosed' defaultValue={row.kmCrosed} onChange={(e) => setEditItem({ ...editItem, kmCrosed: e.target.value })} />
                    <Input type="text" name='tplInsurance' defaultValue={row.tplInsurance} onChange={(e) => setEditItem({ ...editItem, tplInsurance: e.target.value })} />
                    <Input type="text" name='accidentalDamage' defaultValue={row.accidentalDamage} onChange={(e) => setEditItem({ ...editItem, accidentalDamage: e.target.value })} />
                    <Input type="text" name='glassBreaks' defaultValue={row.glassBreaks} onChange={(e) => setEditItem({ ...editItem, glassBreaks: e.target.value })} />
                    <Input type="text" name='fire' defaultValue={row.fire} onChange={(e) => setEditItem({ ...editItem, fire: e.target.value })} />
                    <Input type="text" name='naturalCauses' defaultValue={row.naturalCauses} onChange={(e) => setEditItem({ ...editItem, naturalCauses: e.target.value })} />
                    <Input type="text" name='robery' defaultValue={row.robery} onChange={(e) => setEditItem({ ...editItem, robery: e.target.value })} />
                    <Input type="text" name='parkingHitAndRun' defaultValue={row.parkingHitAndRun} onChange={(e) => setEditItem({ ...editItem, parkingHitAndRun: e.target.value })} />
                    <Input type="text" name='vandalisem' defaultValue={row.vandalisem} onChange={(e) => setEditItem({ ...editItem, vandalisem: e.target.value })} />
                    <Input type="text" name='internacionalInsurance' defaultValue={row.internacionalInsurance} onChange={(e) => setEditItem({ ...editItem, internacionalInsurance: e.target.value })} />
                    <Input type="text" name='namelastName2' defaultValue={row.namelastName2} onChange={(e) => setEditItem({ ...editItem, namelastName2: e.target.value })} />
                    <Input type="text" name='phone2' defaultValue={row.phone2} onChange={(e) => setEditItem({ ...editItem, phone2: e.target.value })} />
                    <Input type="text" name='dateOfBirth2' defaultValue={row.dateOfBirth2} onChange={(e) => setEditItem({ ...editItem, dateOfBirth2: e.target.value })} />
                    <Input type="text" name='driversLicenceTime3' defaultValue={row.driversLicenceTime3} onChange={(e) => setEditItem({ ...editItem, driversLicenceTime3: e.target.value })} />
                    <Input type="text" name='driversLicenceTime4' defaultValue={row.driversLicenceTime4} onChange={(e) => setEditItem({ ...editItem, driversLicenceTime4: e.target.value })} />
                    <Input type="text" name='profession2' defaultValue={row.profession2} onChange={(e) => setEditItem({ ...editItem, profession2: e.target.value })} />
                    <Input type="text" name='deshmiAftesie2' defaultValue={row.deshmiAftesie2} onChange={(e) => setEditItem({ ...editItem, deshmiAftesie2: e.target.value })} />
                    <Input type="text" name='gender2' defaultValue={row.gender2} onChange={(e) => setEditItem({ ...editItem, gender2: e.target.value })} />
                    <Input type="text" name='accidents2' defaultValue={row.accidents2} onChange={(e) => setEditItem({ ...editItem, accidents2: e.target.value })} />
                    <Input type="text" name='accidentNumber2' defaultValue={row.accidentNumber2} onChange={(e) => setEditItem({ ...editItem, accidentNumber2: e.target.value })} />
                    <Input type="text" name='fault2' defaultValue={row.fault2} onChange={(e) => setEditItem({ ...editItem, fault2: e.target.value })} />
                    <Input type="text" name='driversLicenceTime2' defaultValue={row.driversLicenceTime2} onChange={(e) => setEditItem({ ...editItem, driversLicenceTime2: e.target.value })} />
                    <Input type="text" name='carUsage2' marginBottom={'30px'} defaultValue={row.carUsage2} onChange={(e) => setEditItem({ ...editItem, carUsage2: e.target.value })} />
                    <Button bg={'yellow.400'} color={'white'} width={'100px'} type={'submit'}>Save</Button>
                  </form>
                </li>
              )
              {/*namelastName, modelType, phone, plateNumber, coverage, insured,
              adress, reprezantive, dateOfBirth, profession, deshmiAftesie, gender, accidents, accidentNumber, fault, driversLicenceTime, carUsage, chassisNumber,
              engineDisplacement, value, alarm, rental, fuelEconomy, kmPerYear, brand, color, seats, year, insuredPrice, carParking, fuelType, kmCrosed, tplInsurance,
              accidentalDamage, glassBreaks, fire, naturalCauses, robery, parkingHitAndRun, vandalisem, internacionalInsurance, namelastName2, phone2, dateOfBirth2,
              driversLicenceTime3, driversLicenceTime4, profession2, deshmiAftesie2, gender2, accidents2, accidentNumber2, fault2, driversLicenceTime2, carUsage2*/}
              return (
                <li key={row._id} style={{ 'marginBottom': '20px', 'marginTop': '30px' }}>
                  <Input type="text" name='phone' defaultValue={row.phone} disabled />
                  <Input type="text" name='namelastName' defaultValue={row.namelastName} disabled />
                    <Input type="text" name='modelType' defaultValue={row.modelType} disabled />
                    <Input type="text" name='phone' defaultValue={row.phone} disabled />
                    <Input type="text" name='plateNumber' defaultValue={row.plateNumber}disabled />
                    <Input type="text" name='coverage' defaultValue={row.coverage} disabled />
                    <Input type="text" name='insured' defaultValue={row.insured} disabled />
                    <Input type="text" name='adress' defaultValue={row.adress} disabled />
                    <Input type="text" name='reprezantive' defaultValue={row.reprezantive}  disabled />
                    <Input type="text" name='dateOfBirth' defaultValue={row.dateOfBirth} disabled />
                    <Input type="text" name='profession' defaultValue={row.profession} disabled />
                    <Input type="text" name='deshmiAftesie' defaultValue={row.deshmiAftesie} disabled />
                    <Input type="text" name='gender' defaultValue={row.gender} disabled />
                    <Input type="text" name='accidents' defaultValue={row.accidents} disabled />
                    <Input type="text" name='accidentNumber' defaultValue={row.accidentNumber} disabled />
                    <Input type="text" name='fault' defaultValue={row.fault} disabled />
                    <Input type="text" name='driversLicenceTime' defaultValue={row.driversLicenceTime} disabled />
                    <Input type="text" name='carUsage' defaultValue={row.carUsage}  disabled />
                    <Input type="text" name='chassisNumber' defaultValue={row.chassisNumber}disabled />
                    <Input type="text" name='engineDisplacement' defaultValue={row.engineDisplacement} disabled />
                    <Input type="text" name='value' defaultValue={row.value} disabled />
                    <Input type="text" name='alarm' defaultValue={row.alarm} disabled />
                    <Input type="text" name='rental' defaultValue={row.rental} disabled />
                    <Input type="text" name='fuelEconomy' defaultValue={row.fuelEconomy}  disabled />
                    <Input type="text" name='kmPerYear' defaultValue={row.kmPerYear} disabled />
                    <Input type="text" name='brand' defaultValue={row.brand} disabled />
                    <Input type="text" name='color' defaultValue={row.color} disabled />
                    <Input type="text" name='seats' defaultValue={row.seats} disabled />
                    <Input type="text" name='year' defaultValue={row.year} disabled />
                    <Input type="text" name='insuredPrice' defaultValue={row.insuredPrice} disabled />
                    <Input type="text" name='carParking' defaultValue={row.carParking} disabled />
                    <Input type="text" name='fuelType' defaultValue={row.fuelType} disabled />
                    <Input type="text" name='kmCrosed' defaultValue={row.kmCrosed}  disabled />
                    <Input type="text" name='tplInsurance' defaultValue={row.tplInsurance} disabled />
                    <Input type="text" name='accidentalDamage' defaultValue={row.accidentalDamage}  disabled />
                    <Input type="text" name='glassBreaks' defaultValue={row.glassBreaks} disabled />
                    <Input type="text" name='fire' defaultValue={row.fire} disabled />
                    <Input type="text" name='naturalCauses' defaultValue={row.naturalCauses} disabled />
                    <Input type="text" name='robery' defaultValue={row.robery} disabled />
                    <Input type="text" name='parkingHitAndRun' defaultValue={row.parkingHitAndRun}  disabled />
                    <Input type="text" name='vandalisem' defaultValue={row.vandalisem} disabled />
                    <Input type="text" name='internacionalInsurance' defaultValue={row.internacionalInsurance} disabled />
                    <Input type="text" name='namelastName2' defaultValue={row.namelastName2} disabled />
                    <Input type="text" name='phone2' defaultValue={row.phone2} disabled />
                    <Input type="text" name='dateOfBirth2' defaultValue={row.dateOfBirth2} disabled />
                    <Input type="text" name='driversLicenceTime3' defaultValue={row.driversLicenceTime3} disabled />
                    <Input type="text" name='driversLicenceTime4' defaultValue={row.driversLicenceTime4} disabled />
                    <Input type="text" name='profession2' defaultValue={row.profession2} disabled />
                    <Input type="text" name='deshmiAftesie2' defaultValue={row.deshmiAftesie2} disabled />
                    <Input type="text" name='gender2' defaultValue={row.gender2} disabled />
                    <Input type="text" name='accidents2' defaultValue={row.accidents2} disabled />
                    <Input type="text" name='accidentNumber2' defaultValue={row.accidentNumber2} disabled />
                    <Input type="text" name='fault2' defaultValue={row.fault2} disabled />
                    <Input type="text" name='driversLicenceTime2' defaultValue={row.driversLicenceTime2} disabled />
                    <Input type="text" name='carUsage2' marginBottom={'30px'} defaultValue={row.carUsage2} disabled />
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