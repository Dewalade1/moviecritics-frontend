import React from 'react';

import Layout from "../layouts/layout";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 810,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AboutUs () {
    const classes = useStyles();

    return (
      <Layout>
        <h2 className="orange-color mb-4 pb-2 mr-4 pr-2 ml-4 pl-4">About Us</h2>
        <div className="ml-4 pl-4 mr-4 pr-4">
          <h4 className="subheading">Who we are?</h4>
          <p className="paragraph-font mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor. Lobortis elementum nibh tellus molestie nunc non blandit massa. Neque gravida in fermentum et sollicitudin ac orci phasellus. Nam at lectus urna duis convallis. Nibh sed pulvinar proin gravida hendrerit. Ac turpis egestas integer eget. Amet consectetur adipiscing elit ut. Porttitor rhoncus dolor purus non enim. Quis auctor elit sed vulputate mi sit. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Libero volutpat sed cras ornare arcu dui vivamus arcu. Duis convallis convallis tellus id interdum velit laoreet id donec. Eros in cursus turpis massa tincidunt dui ut. Nulla porttitor massa id neque aliquam vestibulum morbi.</p>
          <p className="paragraph-font mt-2">Pellentesque diam volutpat commodo sed egestas egestas fringilla. Lectus nulla at volutpat diam ut venenatis tellus in metus. Scelerisque varius morbi enim nunc faucibus a. Pulvinar neque laoreet suspendisse interdum consectetur. Turpis egestas pretium aenean pharetra magna. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Risus nullam eget felis eget nunc. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Eget nullam non nisi est sit amet facilisis magna.</p>
        </div>
        <div className="mt-4 pt-4 mr-4 pr-4 ml-4 pl-4">
          <h4 className="subheading">What we do?</h4>
          <p className="paragraph-font mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor. Lobortis elementum nibh tellus molestie nunc non blandit massa. Neque gravida in fermentum et sollicitudin ac orci phasellus. Nam at lectus urna duis convallis. Nibh sed pulvinar proin gravida hendrerit. Ac turpis egestas integer eget. Amet consectetur adipiscing elit ut. Porttitor rhoncus dolor purus non enim. Quis auctor elit sed vulputate mi sit. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Libero volutpat sed cras ornare arcu dui vivamus arcu. Duis convallis convallis tellus id interdum velit laoreet id donec. Eros in cursus turpis massa tincidunt dui ut. Nulla porttitor massa id neque aliquam vestibulum morbi.</p>
          <p className="paragraph-font mt-2">Pellentesque diam volutpat commodo sed egestas egestas fringilla. Lectus nulla at volutpat diam ut venenatis tellus in metus. Scelerisque varius morbi enim nunc faucibus a. Pulvinar neque laoreet suspendisse interdum consectetur. Turpis egestas pretium aenean pharetra magna. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Risus nullam eget felis eget nunc. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Eget nullam non nisi est sit amet facilisis magna.</p>
        </div>
        <div className="mt-4 pt-4 mr-4 pr-4 ml-4 pl-4">
          <h4 className="subheading">Our Team</h4>
          <p className="paragraph-font mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor. Lobortis elementum nibh tellus molestie nunc non blandit massa. Neque gravida in fermentum et sollicitudin ac orci phasellus. Nam at lectus urna duis convallis. Nibh sed pulvinar proin gravida hendrerit. Ac turpis egestas integer eget. Amet consectetur adipiscing elit ut. Porttitor rhoncus dolor purus non enim. Quis auctor elit sed vulputate mi sit. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Libero volutpat sed cras ornare arcu dui vivamus arcu. Duis convallis convallis tellus id interdum velit laoreet id donec. Eros in cursus turpis massa tincidunt dui ut. Nulla porttitor massa id neque aliquam vestibulum morbi.</p>
          <p className="paragraph-font mt-2">Pellentesque diam volutpat commodo sed egestas egestas fringilla. Lectus nulla at volutpat diam ut venenatis tellus in metus. Scelerisque varius morbi enim nunc faucibus a. Pulvinar neque laoreet suspendisse interdum consectetur. Turpis egestas pretium aenean pharetra magna. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Risus nullam eget felis eget nunc. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Eget nullam non nisi est sit amet facilisis magna.</p>
        </div>
      </Layout>
    );
}