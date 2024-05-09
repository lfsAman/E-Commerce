import {
  AccountBoxOutlined,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";
import PaidIcon from "@mui/icons-material/Paid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const salesData = [
  {
    stats: "254k",
    title: "Sales",
    color: "primary",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5k",
    title: "Customers",
    color: "success",
    icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "1.54k",
    title: "Products",
    color: "warning",
    icon: <SettingsCellIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "88$",
    title: "Revenue",
    color: "info",
    icon: <PaidIcon sx={{ fontSize: "1.75rem" }} />,
  },
];
const renderStats = () => {
    return salesData.map((item, index) => (
      <Grid item xs={12} sm={3} key={index}>
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            variant='rounded'
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              backgroundColor: `${item.color}.main`
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ))
  }
const MonthlyOverView = () => {
  return (
    <Card >
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "white",mx:0.75 }}
            >
              Total 48.5% growth 
            </Box>
            this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            marginBottom: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverView;
