import { Google } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom'

import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Crear cuenta">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label="nombre" type="text" placeholder="Nombre" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label="correo" type="email" placeholder="correo@test.com" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField label="contrasena" type="password" fullWidth />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                Crear cuenta
              </Button>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }} >Google</Typography>
              </Button>
            </Grid> */}
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>
                Ya tienes una cuenta?
              </Typography>
              <Link color='inherit' to="/auth/login" component={RouterLink}>
                ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  )
}
