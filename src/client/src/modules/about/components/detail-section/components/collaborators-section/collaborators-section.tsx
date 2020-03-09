import { Theme, Typography } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { CollaboratorCard } from '../../../../../../modules/about/components/detail-section/components/collaborators-section/components/collaborator-card';
import { Nullable } from '../../../../../../../../shared/interface';
import { ICollaborator } from '../../../../../../../../shared/interface/collaborator';
import * as React from 'react';
const collaboratorsGithub = [
  'tdkprodev',
  'mdawsondev',
  'gaearon',
  'appleboy',
  'stof',
  'fabpot',
];

const styles = (theme: Theme) =>
  createStyles({
    arrow: {
      fontSize: 6,
      height: '3em',
      position: 'absolute',
      width: '3em',

      '&::before': {
        borderStyle: 'solid',
        content: '""',
        display: 'block',
        height: 0,
        margin: 'auto',
        width: 0,
      },
    },
    collaboratorsContainer: {
      // alignItems: "center",
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '5rem',
    },
    subHeading: {
      fontWeight: 600,
      margin: 10,
    },
  });

type IProps = WithStyles<typeof styles>;

interface IState {
  collaborators: Array<Nullable<ICollaborator>>;
  expanded: string;
}

class CollaboratorsSection extends React.Component<IProps, IState> {
  public state = {
    collaborators: [],
    expanded: 'detail-panel',
  };

  public async componentDidMount() {
    this.fetchCollaborators();
  }

  public fetchCollaborators = async () => {
    const results = [];
    for (const developer of collaboratorsGithub) {
      const url = `https://api.github.com/users/${developer}`;
      const result = fetch(url).then(res => res.json());
      results.push(result);
    }

    let collaborators: Array<Nullable<ICollaborator>> = [];
    try {
      collaborators = await Promise.all(results);
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.error('Error in fetching collaborators from GitHub API.', error);
    } finally {
      this.setState(() => ({
        collaborators: collaborators || [],
      }));
    }
    // tslint:disable-next-line:no-console
    console.log('collaborators ----', collaborators);
  };

  public renderCollaborators = () => {
    const { collaborators } = this.state;

    return collaborators.length
      ? collaborators.map((collaborator: ICollaborator, index) => {
          const {
            avatar_url: avatarUrl,
            bio,
            blog,
            company,
            html_url: htmlUrl,
            location,
            name,
            login,
            followers,
            following,
            public_gists: publicGists,
            public_repos: publicRepos,
          } = collaborator;

          return (
            <CollaboratorCard
              key={index}
              avatarUrl={avatarUrl}
              bio={bio}
              blog={blog}
              company={company}
              url={htmlUrl}
              location={location}
              name={name}
              login={login}
              followers={followers}
              following={following}
              gistsCount={publicGists}
              reposCount={publicRepos}
            />
          );
        })
      : [];
  };

  public render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography
          className={classes.subHeading}
          gutterBottom={true}
          variant="h4"
          align="center"
        >
          Collaborators
        </Typography>
        <div className={classes.collaboratorsContainer}>
          {this.renderCollaborators()}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CollaboratorsSection);
