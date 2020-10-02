import { CollaboratorsSection } from './components/collaborators-section';
import { DevToolsSection } from './components/dev-tools-section';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Theme,
  // Tooltip,
  Typography,
} from '@material-ui/core';
import { InfluencersSection } from './components/influencers-section';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
// import { PassionSection } from './components/passion-section';
import * as React from 'react';
import { ChangeEvent } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const styles = (theme: Theme) =>
  createStyles({
    arrow: {
      '&::before': {
        borderStyle: 'solid',
        content: '""',
        display: 'block',
        height: 0,
        margin: 'auto',
        width: 0,
      },
      fontSize: 6,
      height: '3em',
      position: 'absolute',

      width: '3em',
    },
    border: {
      border: 'solid pink 3px',
    },
    buildTools: {
      '@media (max-width: 1200px)': {
        margin: '0 3rem',
        marginBottom: '5rem',
      },
      '@media (max-width: 600px)': {
        justifyContent: 'space-around',
      },
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',

      margin: '0 5rem',
      marginBottom: '5rem',
    },
    devTools: {
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    devToolsContainer: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
    heading: {
      flexBasis: '33.33%',
      flexShrink: 0,
      // fontSize: theme.typography.pxToRem(25)
    },
    paper: {
      padding: '3rem 0',
    },
    root: {
      display: 'block',
      padding: '0 5rem',
      width: '100%',
    },
    subHeading: {
      fontWeight: 600,
      margin: 10,
    },
    toolsContainer: {
      '@media (max-width: 600px)': {
        width: '100%',
      },
    },
  });

type IProps = WithStyles<typeof styles>;

class DetailSection extends React.Component<IProps> {
  public state = {
    expanded: 'detail-panel',
  };

  public handleChange = (panel: 'detail-panel') => (
    event: ChangeEvent<{}>,
    expanded: boolean,
  ) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  public render() {
    const { expanded } = this.state;
    const { classes } = this.props;

    return (
      <ExpansionPanel
        expanded={expanded === 'detail-panel'}
        onChange={this.handleChange('detail-panel')}
      >
        <ExpansionPanelSummary expandIcon={<FaChevronDown />}>
          <Typography variant="h4">The Rest of the Iceburg</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails classes={{ root: classes.root }}>
          {/* <DevToolsSection /> */}
          {/* <PassionSection /> */}
          <InfluencersSection />
          <CollaboratorsSection />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(DetailSection);
