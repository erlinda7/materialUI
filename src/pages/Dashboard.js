import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import '../assets/css/Dashboard.css';

import YouTubeIcon from '@material-ui/icons/YouTube';
import PublicIcon from '@material-ui/icons/Public';
import VideocamIcon from '@material-ui/icons/Videocam';
import CardsHeader from '../components/CardsHeader';
import Cards from '../components/Cards';
import Graphics from '../components/Graphics';
import TableMaterial from '../components/TableMaterial';
import split from '../assets/img/split.webp'
import error from '../assets/img/error.webp'
import forever from "../assets/img/forever.webp"

import MaterialTable from 'material-table';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow:1,
  },
  iconos: {
    color: 'white'
  },
  container:{
    paddingTop: '40px',
    alignItems: 'center'
  },
  containerGrafica :{
    marginTop: '40px'
  },
  containerTabla:{
    marginTop: '40px'
  },
  containerTable:{
    paddingTop: '200px'
  }
}))

const data = [
  {
    id:1,
    video:
      "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
    fecha: "6 de sep. 2020",
    visualizaciones: 32,
    imagen: split,
  },
  {
    id:2,
      video:
        "Cómo Solucionar Error al Crear Applicación de React JS",
      fecha: "5 de sep. 2020",
      visualizaciones: 31,
      imagen: error,
    },
    {
    id:3,
      video:
        "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
      fecha: "4 de sep. 2020",
      visualizaciones: 21,
      imagen: forever,
    },
];

const columnas =[
  {
    title: 'Artista',
    field: 'artista'
  },
  {
    title: 'Pais de origen',
    field: 'pais'
  },
  {
    title: 'Generos(s)',
    field: 'genero'
  },
  {
    title: 'Ventas estimadas en millones',
    field: 'ventas',
    type: 'numeric'
  }
]

const dataTabla= [
  {artista: "Los Beatles", pais: 'Reino Unido', genero: 'Rock, Pop', ventas: 1000},
  {artista: "Elvis Presley", pais: 'Estados Unidos', genero: 'Rock and roll, country', ventas: 1000},
  {artista: "Michael JAckson", pais: 'Estados Unidos', genero: 'Pop, Rock, dance , r&B', ventas: 600},
  {artista: "MAdona", pais: 'Estados Unidos', genero: 'Pop, Rock', ventas: 400},
  {artista: "Elton John", pais: 'Reino Unido', genero: 'Pop, Rock', ventas: 350},
]

function Dashboard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <NavBar/>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono={<YouTubeIcon className={classes.iconos}/>} titulo="CANAL" texto="BorjaScript" color="rgba(248,80,50,1)" font="white"/>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono={<PublicIcon className={classes.iconos}/>} titulo="PAIS" texto="Mexico" color="rgba(248,80,50,1)" font="white"/>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icono={<VideocamIcon className={classes.iconos}/>} titulo="CANTIDAD DE VIDEOS" texto="85" color="rgba(248,80,50,1)" font="white"/>
        </Grid>

        <Grid container spacing={1} className={classes.container} xs={12} sm={6} md={6} lg={6} xl={6}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo= "SUSCRIPTORES" texto="692"/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo= "VISUALIZACIONES" texto="111,092"/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo= "TIPO VISUALIZACION" texto="2,504 horas"/>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Cards titulo= "PORCENTAJE IMPRESIONES" texto="14.2%"/>
          </Grid>
        </Grid>

        <Grid item xs={0} sm={0} md={1} lg={1} xl={1}>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
            <Graphics />
        </Grid>

        <Grid item xs={12} className={classes.containerTabla}>
          <TableMaterial data={data} />
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.containerTable}>
        <Grid item xs={12} sm={12} md={12}>
        <MaterialTable 
          columns={columnas}
          data={dataTabla}
          title="Artistas Musicales con Mayores Ventas"
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar artista',
              onClick: (event, rowData) => alert('Has presionado editar al artista...'+rowData.artista)
            },
            {
              icon: 'delete',
              tooltip: 'Eliminar artista',
              onClick: (event, rowData) => window.confirm('Estas seguro que deseas eliminar al artista...'+rowData.artista+ '?')
            }
          ]}
          options={{
            actionsColumnIndex:-1
          }}
          localization={{
            header:{
              actions: 'Acciones'
            }
          }}
        />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard;
