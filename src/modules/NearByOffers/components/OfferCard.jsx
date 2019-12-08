import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {Avatar, Card, CardMedia, CardContent, Divider, Typography, Chip, Button} from "@material-ui/core";
import {getRandomTag} from '../../../consts/random';
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

const OfferCard = (props) => {
    const {classes, offer} = props;
    return (
        <div className="App">
            <Card className={classes.card}>
                <div className="wrap">
                    <div className="ribbon6">{offer.text}</div>
                </div>
                <CardMedia
                    className={classes.media}
                    image={offer.img}
                />
                <CardContent className={classes.content}>
                    <Typography
                        className={"MuiTypography--heading"}
                        variant={"h6"}
                        gutterBottom
                    >
                      {offer.name}
                    </Typography>
                    <Chip label={getRandomTag()} color="primary" variant="outlined" classes={{
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
                        <Button variant="outlined" color="primary"  className={classes.button}>
                            Navigate
                        </Button>
                        <Button variant="contained" color="primary"  className={classes.button}>
                            Claim Offer
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

};

export default withStyles(style)(OfferCard);
