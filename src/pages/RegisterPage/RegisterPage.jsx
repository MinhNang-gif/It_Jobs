import * as React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react'
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const companyNames = [
  'Ho Chi Minh',
  'Ha Noi',
  'Da Nang',
  'Nha Trang',
  'Phu Yen',
  'Binh Duong',
  'Binh Dinh',
  'Gia Lai',
  'Quang Nam',
  'Others',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

function Register() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleChangeCompany = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // Password
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  // Confirm password
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleClickShowConfirmPassword = () => setShowConfirmPassword(show => !show)

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpConfirmPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{
      height: 'fit-content',
      bgcolor: 'white',
      padding: 5,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Body */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>
        {/* Email */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          <Typography sx={{
            color: '#2c3e50',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            Email
          </Typography>

          <FormControl
            size='medium'
            required
            color='secondary'
            variant='outlined'
            sx={{
              minWidth: '300px',
              maxWidth: '640px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#7f8c8d', // Màu border mặc định
                },
                '&:hover fieldset': {
                  borderColor: '#2c3e50', // Khi hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2c3e50', // Khi focus
                },
              },
              "& .MuiFormLabel-asterisk": {
                color: 'red'
              }
            }}
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              shrink={true}
              sx={{
                color: '#2c3e50',
                transform: "translate(14px, -6px) scale(0.85)",
                backgroundColor: "white",
                px: 1
              }}
            >
              Email
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type='text'
              startAdornment={
                <InputAdornment position='start'>
                  <EmailIcon sx={{ color: '#00B14F' }} />
                </InputAdornment>
              }
              label="Email"
              sx={{
                color: '#2c3e50'
              }}
            />
          </FormControl>
        </Box>

        {/* Password */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          <Typography sx={{
            color: '#2c3e50',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            Mật khẩu
          </Typography>

          <FormControl
            size='medium'
            required
            color='secondary'
            variant='outlined'
            sx={{
              minWidth: '300px',
              maxWidth: '640px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#7f8c8d', // Màu border mặc định
                },
                '&:hover fieldset': {
                  borderColor: '#2c3e50', // Khi hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2c3e50', // Khi focus
                },
              },
              "& .MuiFormLabel-asterisk": {
                color: 'red'
              }
            }}
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              shrink={true}
              sx={{
                color: '#2c3e50',
                transform: "translate(14px, -6px) scale(0.85)",
                backgroundColor: "white",
                px: 1
              }}
            >
              Mật khẩu
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              startAdornment={
                <InputAdornment position='start'>
                  <LockIcon sx={{ color: '#00B14F' }} />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              sx={{
                color: '#2c3e50'
              }}
            />
          </FormControl>
        </Box>

        {/* Nhap lai password */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          <Typography sx={{
            color: '#2c3e50',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            Nhập lại mật khẩu
          </Typography>

          <FormControl
            size='medium'
            required
            color='secondary'
            variant='outlined'
            sx={{
              minWidth: '300px',
              maxWidth: '640px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#7f8c8d', // Màu border mặc định
                },
                '&:hover fieldset': {
                  borderColor: '#2c3e50', // Khi hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2c3e50', // Khi focus
                },
              },
              "& .MuiFormLabel-asterisk": {
                color: 'red'
              }
            }}
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              shrink={true}
              sx={{
                color: '#2c3e50',
                transform: "translate(14px, -6px) scale(0.85)",
                backgroundColor: "white",
                px: 1
              }}
            >
              Nhập lại mật khẩu
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              startAdornment={
                <InputAdornment position='start'>
                  <LockIcon sx={{ color: '#00B14F' }} />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showConfirmPassword ? 'hide the password' : 'display the password'}
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownConfirmPassword}
                    onMouseUp={handleMouseUpConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              sx={{
                color: '#2c3e50'
              }}
            />
          </FormControl>
        </Box>
        
        {/* Your contact information */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          <Typography sx={{
            color: '#2c3e50',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            Your contact information
          </Typography>

          <Box sx={{
            display: 'flex',
            gap: 5
          }}>
            <TextField
              id="outlined-search"
              label="Full name"
              type="text"
              size='normal'
              required
              sx={{
                minWidth: '300px',
                maxWidth: '300px',
                '& label': {
                  color: '#7f8c8d'
                },
                '& label.Mui-focused': {
                  color: '#7f8c8d'
                },
                '& input': {
                  color: '#2d3436',
                  fontSize: '1rem'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#7f8c8d'
                  },
                  '&:hover fieldset': {
                    borderColor: 'black'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black'
                  }
                },
                "& .MuiFormLabel-asterisk": {
                  color: "red", // Đổi màu dấu *
                }
              }}
            />
            <TextField
              id="outlined-search"
              label="Work title"
              type="text"
              size='normal'
              required
              sx={{
                minWidth: '300px',
                maxWidth: '300px',
                '& label': {
                  color: '#7f8c8d'
                },
                '& label.Mui-focused': {
                  color: '#7f8c8d'
                },
                '& input': {
                  color: '#2d3436',
                  fontSize: '1rem'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#7f8c8d'
                  },
                  '&:hover fieldset': {
                    borderColor: 'black'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black'
                  }
                },
                "& .MuiFormLabel-asterisk": {
                  color: "red", // Đổi màu dấu *
                }
              }}
            />
          </Box>

          <Box sx={{
            display: 'flex',
            gap: 5
          }}>
            <TextField
              id="outlined-search"
              label="Address"
              type="text"
              size='normal'
              required
              sx={{
                minWidth: '300px',
                maxWidth: '300px',
                '& label': {
                  color: '#7f8c8d'
                },
                '& label.Mui-focused': {
                  color: '#7f8c8d'
                },
                '& input': {
                  color: '#2d3436',
                  fontSize: '1rem'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#7f8c8d'
                  },
                  '&:hover fieldset': {
                    borderColor: 'black'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black'
                  }
                },
                "& .MuiFormLabel-asterisk": {
                  color: "red", // Đổi màu dấu *
                }
              }}
            />
            <TextField
              id="outlined-search"
              label="Phone number"
              type="text"
              size='normal'
              required
              sx={{
                minWidth: '300px',
                maxWidth: '300px',
                '& label': {
                  color: '#7f8c8d'
                },
                '& label.Mui-focused': {
                  color: '#7f8c8d'
                },
                '& input': {
                  color: '#2d3436',
                  fontSize: '1rem'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#7f8c8d'
                  },
                  '&:hover fieldset': {
                    borderColor: 'black'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black'
                  }
                },
                "& .MuiFormLabel-asterisk": {
                  color: "red", // Đổi màu dấu *
                }
              }}
            />
          </Box>
        </ Box>

        {/* Company information */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          <Typography sx={{
            color: '#2c3e50',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}>
            Company information
          </Typography>

          <TextField
            id="outlined-search"
            label="Company name"
            type="text"
            size='normal'
            required
            sx={{
              minWidth: '300px',
              maxWidth: '640px',
              width: '100%',
              '& label': {
                color: '#7f8c8d'
              },
              '& label.Mui-focused': {
                color: '#7f8c8d'
              },
              '& input': {
                color: '#2d3436',
                fontSize: '1rem'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#7f8c8d'
                },
                '&:hover fieldset': {
                  borderColor: 'black'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black'
                }
              },
              "& .MuiFormLabel-asterisk": {
                color: "red", // Đổi màu dấu *
              }
            }}
          />
          
          <FormControl size='medium' required color='secondary' variant='outlined'
            sx={{
              minWidth: '300px',
              maxWidth: '640px',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#7f8c8d', // Màu border mặc định
                },
                '&:hover fieldset': {
                  borderColor: '#2c3e50', // Khi hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2c3e50', // Khi focus
                },
              },
              "& .MuiFormLabel-asterisk": {
                color: 'red'
              }
            }}
          >
            <InputLabel
              id="demo-multiple-name-label"
              shrink={true}
              sx={{
                color: '#2c3e50',
                transform: "translate(14px, -6px) scale(0.85)",
                backgroundColor: "white",
                px: 1
              }}>Company location
              </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={personName || ""}
              onChange={handleChangeCompany}
              input={<OutlinedInput label="Company location" />}
              MenuProps={MenuProps}
              sx={{
                color: '#2c3e50', // Màu chữ Select,
                fontSize: '1rem',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#3498db', // Màu border mặc định
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2980b9', // Màu border khi hover
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e74c3c', // Màu border khi focus
                },
              }}
            >
              {companyNames.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                  sx={{
                    color: '#2c3e50',
                    fontSize: '1rem',
                  }}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="outlined-search"
            label="Website URL"
            type="text"
            size='normal'
            sx={{
              minWidth: '300px',
              maxWidth: '640px',
              width: '100%',
              '& label': {
                color: '#7f8c8d'
              },
              '& label.Mui-focused': {
                color: '#7f8c8d'
              },
              '& input': {
                color: '#2d3436',
                fontSize: '1rem'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#7f8c8d'
                },
                '&:hover fieldset': {
                  borderColor: 'black'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black'
                }
              }
            }}
          />
        </Box>
        
      </Box>


      <Box sx={{ marginY: 2 }} />


      {/* Footer */}
      <Box>
          {/* Dieu khoan */}
          <Box sx={{
            display: 'flex',
            alignItems: 'flex-start'
            
          }}>
            <Checkbox
              sx={{
                color: '#7F7F7F',
                '&.Mui-checked': {
                  color: '#00B14F'
                },
                '&.MuiButtonBase-root': {
                  paddingLeft: '0px'
                }
              }}
            />
            <Typography sx={{
              color: '#353b48',
              maxWidth: '630px',
              wordWrap: 'break-word',
              marginTop: '7px'
            }}>
              I have read and agree to ITviec's
              <Typography variant='span' sx={{ color: '#00B14F' }}> Terms & Conditions </Typography> and <Typography variant='span' sx={{ color: '#00B14F' }}> Privacy Policy </Typography> in relation to my privacy information
            </Typography>
          </Box>

          {/* Register btn */}
          <Button
            variant="contained"
            sx={{
              bgcolor: '#00B14F',
              width: '640px',
              marginY: '16px',
              '&:hover': {
                bgcolor: '#00B14F',
                opacity: '0.9'
              },
              '&:active': {
                bgcolor: '#00B14F'
              },
              '&:focus': {
                bgcolor: '#00B14F'
              }
            }}
          >
            Register
          </Button>
      </Box>
    </Box>
  )
}

export default Register





