import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {Avatar, Card, CardMedia, CardContent, Divider, Typography, Chip, Button} from "@material-ui/core";
const faces = [
    "http://i.pravatar.cc/300?img=1",
    "http://i.pravatar.cc/300?img=2",
    "http://i.pravatar.cc/300?img=3",
    "http://i.pravatar.cc/300?img=4"
];
const style = (theme) => ({
    card: {
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "56.25%",
    },
    content: {
        textAlign: "left",
        padding: theme.spacing.unit * 3
    },
    divider: {
        margin: `${theme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
            marginLeft: -theme.spacing.unit
        }
    },
    chip: {
        marginRight: 2.8,
    },
    desc: {
        display: 'block',
        marginTop: theme.spacing.unit
    },
    cta: {
        display: 'flex',
        marginTop: '26px'
    },
    button: {
        flex: 1,
        margin: '0px 5px',
    }
});

const StorePage = (props) => {
    const {classes, postTransaction, match} = props;

    console.log('currentRoute', props);
    const createOrder =  (type) => () => {
        postTransaction({type, merchantId: match.params.storeId})
    };

    return (
        <div className="App">
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={
                        "https://b.zmtcdn.com/data/pictures/6/18853706/9b437dc670e7284a99e1ab9cfc8b2703.jpg?impolicy=newfitandcrop&fittype=ignore&fitw=1204&fith=741&cropw=1200&croph=464&cropoffsetx=-20&cropoffsety=218&cropgravity=NorthWest"
                    }
                />
                <CardContent className={classes.content}>
                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                    >
                        Brahma Brews
                    </Typography>
                    <Chip label="MicroBrewery" color="primary" variant="outlined" classes={{
                        root: classes.chip
                    }}/>
                    <Chip label="Casual Dining" color="primary"  variant="outlined" classes={{
                        root: classes.chip
                    }}/>
                    <Typography
                        classes={{
                            root: classes.desc
                        }}
                        className={"MuiTypography--subheading"}
                        variant={"caption"}
                    >
                        We are going to learn different kinds of species in nature that live
                        together to form amazing environment.
                    </Typography>
                    <div className={classes.cta}>
                        <Button variant="outlined" color="primary"  className={classes.button} onClick={createOrder('desert')}>
                            Order Desert
                        </Button>
                        <Button variant="outlined" color="primary"  className={classes.button}>
                            Claim Offer
                        </Button>
                    </div>
                    <Divider className={classes.divider} light />
                    {faces.map(face => (
                        <Avatar className={classes.avatar} key={face} src={face} />
                    ))}

                </CardContent>
            </Card>
        </div>
    );

};

export default withStyles(style)(StorePage);