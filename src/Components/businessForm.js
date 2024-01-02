import * as React from 'react';
import {useForm} from 'react-hook-form';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import objectBusiness from '../singleTons/business'

export default function BusinessForm({setToSetBusiness,handleClose}) {
    const {register, handleSubmit} = useForm();
  return (
    <form onSubmit={handleSubmit((data)=>{
                    objectBusiness.postBusiness(data);
                    handleClose();
                    setToSetBusiness(false);
                    }) }>
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '100%',
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Update Business Details
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        
        <FormControl>
          <FormLabel>Business name</FormLabel>
          <Input endDecorator={<BorderColorIcon />} {...register("name")}/>
        </FormControl>
        <FormControl>
          <FormLabel>Business owner</FormLabel>
          <Input endDecorator={<InfoOutlined />} {...register("owner")}/>
        </FormControl>
        <FormControl>
          <FormLabel>Business address</FormLabel>
          <Input endDecorator={<CreditCardIcon />} {...register("address")}/>
        </FormControl>
        <FormControl>
          <FormLabel>Business phone</FormLabel>
          <Input endDecorator={<InfoOutlined />} {...register("phone")}/>
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Business description</FormLabel>
          <Input placeholder="Enter Business description" {...register("description")}/>
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Business logo</FormLabel>
          <Input placeholder="Enter Business logo" {...register("logo")}/>
        </FormControl>
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="solid" color="primary" type="submit">
            submit
          </Button>
        </CardActions>
        
      </CardContent>
    </Card>
    </form>
  );
}