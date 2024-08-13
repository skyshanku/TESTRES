import { useEffect, useState } from 'react';
import $ from 'jquery';
import 'jquery.ripples'; // Ensure this package is installed
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fade from '@mui/material/Fade';



function WaterRippleEffect() {
  const [open, setOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    // Initialize the ripples effect on the body
    $('body').ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });

    // Auto hide the notification after 5 seconds
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    // Clean up the effect and timer when the component unmounts
    return () => {
      $('body').ripples('destroy');
      clearTimeout(timer);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* Glassmorphism Pop-Down Navigation Bar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.2)', 
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          top: 0
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              textShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' 
            }}
          >
            Akash Website
          </Typography>
          <Button 
            color="inherit" 
            onClick={handleClick} 
            sx={{ 
              mx: 2, 
              background: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(10px)', 
              borderRadius: '12px',
              textShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              '&:focus': {
                outline: 'none',
              }
            }}
          >
            Menu
          </Button>
        </Toolbar>
        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <Toolbar sx={{ display: 'flex', justifyContent: 'center', background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)', padding: '10px' }}>
            <Button 
              color="secondary" 
              sx={{ 
                mx: 2, 
                background: 'rgba(255, 255, 255, 0.2)', 
                backdropFilter: 'blur(10px)', 
                borderRadius: '12px',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:focus': {
                  outline: 'none',
                }
              }}
            >
              About
            </Button>

            <Button 
              color="secondary" 
              sx={{ 
                mx: 2, 
                background: 'rgba(255, 255, 255, 0.2)', 
                backdropFilter: 'blur(10px)', 
                borderRadius: '12px',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:focus': {
                  outline: 'none',
                }
              }}
            >
              Download
            </Button>
        
          
            <Button 
              color="secondary" 
              sx={{ 
                mx: 2, 
                background: 'rgba(255, 255, 255, 0.2)', 
                backdropFilter: 'blur(10px)', 
                borderRadius: '12px',
                textShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:focus': {
                  outline: 'none',
                }
              }}
            >
              Contact
            </Button>
          </Toolbar>
        </Slide>
      </AppBar>

      {/* Auto Pop-up Notification */}
      <Fade in={showNotification} timeout={600}>
        <Card 
          sx={{ 
            maxWidth: 345, 
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            background: 'rgba(255, 255, 255, 0.7)', 
            backdropFilter: 'blur(10px)',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            borderRadius: '12px'
          }}
        >
          <CardMedia
            component="img"
            height="240"
            image="https://i.ibb.co/1s561WF/8658254-1-11zon.jpg" // Replace with your image URL
            alt="Notification Image"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Welcome to Akash Website
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enjoy exploring the features and content we have to offer!
            </Typography>
          </CardContent>
        </Card>
      </Fade>

      <section>
        <header>
          <h1>Akash</h1>
          <h2>A nice jQuery Plugin for your Website</h2>
        </header>
      </section>

      <style>
        {`
          html {
            height: 100%;
          }
          body {
            color: #fff;
            font-size: 16px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            background-image: url(https://i.ibb.co/1s561WF/8658254-1-11zon.jpg);
            background-size: cover;
            background-position: 50% 0;
            height: 100%;
            text-align: center;
            margin: 0;
            padding: 0;
          }
          body:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            height: 100%;
          }
          .link-area {
            position: fixed;
            bottom: 20px;
            left: 20px;  
            padding: 15px;
            border-radius: 40px;
            background: tomato;
          }
          .link-area a {
            text-decoration: none;
            color: #fff;
            font-size: 25px;
          }
        `}
      </style>
    </div>
  );
}

export default WaterRippleEffect;
