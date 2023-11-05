import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import Card3 from '../Card/Card1';
import Card1 from '../Card/Card1';

import image from '../../assets/img/IMG-3.jpeg'

export default function CustomTab() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // console.log(data.data)
    return (
        // sx={{ width: '100%', typography: 'body1' }}
        <Box   >
            <TabContext value={value}   >
                {/* sx={{ borderBottom: 1, borderColor: 'divider' }} */}
                <Box className="flex justify-center border-b-2 border-gray-300 text-rose-100 ">
                    <TabList onChange={handleChange} aria-label="lab API tabs example"   sx={{
                        '& .MuiTab-root': {
                            '&.Mui-selected': {
                                color: 'red',
                            },
                        },
                    }} indicatorColor="primary"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: 'red',
                            },
                        }}>
                   
                       
                       <Tab value="1" label="Wall Decor" className="h-[250px] w-[200px] mt-10 mb-20" icon={ <img
                                src={image}
                                alt="Item One"
                                className="object-cover h-[200px] w-[200px] rounded-full"
                                style={{ display: 'block' }}
                            />}>
                           
                        </Tab> 
                       
                        <Tab value="2" label="Gifting" className="h-[250px] w-[200px] rounded-full" icon={ <img
                                src={image}
                                alt="Item One"
                                className="object-cover h-[200px] w-[200px] rounded-full"
                                style={{ display: 'block' }}
                            />}>
                           
                        </Tab> 
                         
                        <Tab value="3"  label="third tab" className="h-[250px] w-[200px] rounded-full" icon={ <img
                                src={image}
                                alt="Item One"
                                className="object-cover h-[200px] w-[200px] rounded-full"
                                style={{ display: 'block' }}
                            />}      >
                           
                        </Tab> 
                    </TabList>
                </Box>


                <TabPanel value="1" className={value === '1' ? 'bg-red-500  text-white' : 'hidden'  }>
                    <div className='flex flex-wrap mx-auto justify-center'>
                        <Card1 />
                        <Card1 />
                        <Card1 />
                    </div>


                </TabPanel>
                <TabPanel value="2" className={value === '2' ? 'bg-red-500 text-white p-4' : 'hidden'}>
                    <div className='flex flex-wrap'>
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                    </div>
                </TabPanel>
                <TabPanel value="3" className={value === '3' ? 'bg-red-500 text-white p-4' : 'hidden'}>
                    <div className='flex flex-wrap mx-auto justify-center'>
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                    </div>
                </TabPanel>

            </TabContext>

        </Box>
    );
}


