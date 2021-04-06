import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Layout from "../../layouts/layout";

import Privacy from './privacy';
import Terms from './terms';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 1200,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: '24%',
  },
  'PrivateTabIndicator-root-3': {
      color: '#fd7e14',
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Layout>
    <div className={`${classes.root} ml-4 pl-4 mr-4 pr-4`}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="legal-tab"
        className={classes.tabs}
      >
        <Tab label="Privacy Policy" {...a11yProps(0)}  id='privacy'/>
        <Tab label="Our Terms" {...a11yProps(1)}  id='terms'/>
        <Tab label="Trademarks and Brand Use Policy" {...a11yProps(2)} />
        <Tab label="Licences" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Privacy/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Terms/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
       <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  </Layout>
  );
}
