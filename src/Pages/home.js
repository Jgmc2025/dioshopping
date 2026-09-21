import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, List, makeStyles } from '@material-ui/core/';
import Item from '../components/Item';
import Card from '../components/Card';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '5px',
      gap: "15px"
    }
  }));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const classes = useStyles();

    const categorys = products.map(
        category => {
            const container = { };
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
                    .filter(function(item, index, arr){
                        return arr.indexOf(item, index + 1) === -1;
                    })
                    .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = { };

    for(let i = 0; i < arrayCategory.length; i++){
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    return(
        <Grid container spacing={3} className={classes.root} style={{paddingTop: "150px", paddingBottom: "150px"}}>
            <Grid item xs={2} style={{border: "1px solid", borderColor: "#ddd", borderRadius: "10px",
                boxSizing: "border-box", boxShadow: "0px 1px 8px rgba(0,0,0,0.08)", height: "450px", margin: "30px"}}>
                <Typography variant='h5' style={{margin: "15px"}}>
                    Categorias
                </Typography>
                <List>
                    {category.map(
                        category => {
                            return (
                                <Item
                                    key = {category.id} 
                                    name= {category.name}
                                    details={count[category.name]}
                                />
                            )
                        }
                    )}
                </List>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root}>
                {products.map(item => {
                    return(
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default HomePage;
