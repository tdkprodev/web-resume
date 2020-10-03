import * as React from 'react';
import { GitHubUserCard } from '../../../../../../modules/about/components/detail-section/components/collaborators-section/components/github-user-card';
import { GitHubUser } from '../../../../../../../../shared/interface/github-user';
import { api } from '../../../../../../utils/api';
import { Nullable } from '../../../../../../../../shared/interface';
import { Typography } from '@material-ui/core';
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';
import { UserFaceOff } from '../../components/user-face-off';

const collaboratorsGithub = [
  'geohot',
  'tpope',
  'substack',
  'gaearon',
  'torvalds',
  'tj',
];

const styles = () =>
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
  collaborators: Nullable<GitHubUser>[];
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

  // public fetchGitHubUsers = async (userNames: string[]) => {
  //   return await Promise.all(
  //     userNames.map(userName => {
  //       const url = `https://api.github.com/users/${userName}`;
  //       return fetch(url).then(res => res.json());
  //     }),
  //   ).catch(err => {
  //     console.error('Error fetching github users');
  //   });
  // };

  public fetchCollaborators = async () => {
    let collaborators: Nullable<GitHubUser>[] = [];

    try {
      collaborators = (await api.fetchGitHubUsers(
        collaboratorsGithub,
      )) as Nullable<GitHubUser>[];
    } catch (error) {
      console.error('Error in fetching collaborators from GitHub API.', error);
    } finally {
      this.setState(() => ({
        collaborators: collaborators || [],
      }));
    }

    console.log('collaborators ----', collaborators);
  };

  public renderCollaborators = () => {
    const { collaborators } = this.state;

    return collaborators.length
      ? collaborators.map((collaborator: GitHubUser, index) => {
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
            <GitHubUserCard
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
        <UserFaceOff />
        <div className={classes.collaboratorsContainer}>
          {this.renderCollaborators()}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(CollaboratorsSection);
