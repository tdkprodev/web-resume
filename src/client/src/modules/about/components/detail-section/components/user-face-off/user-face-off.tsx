import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { api } from '../../../../../../utils/api';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { GitHubUserCard } from '../collaborators-section/components/github-user-card';
import { GitHubUser } from '../../../../../../../../shared/interface/github-user';
import { FaceOffResponsiveBar } from '../../../../../../components/responsive-bar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 400,
      },
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '@media (max-width: 1080px)': {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        gridTemplateAreas: `
            "graph ."
            "user opponent"`,
      },
      '@media (max-width: 800px)': {
        gridTemplateAreas: `
            "graph"
            "user"
            "opponent"`,
      },
    },
    search: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    stats: {
      height: '500px',
      width: '500px',

      '@media (max-width: 1350px)': {
        width: '400px',
      },

      '@media (max-width: 1200px)': {
        width: '350px',
      },
      '@media (max-width: 800px)': {
        width: '400px',
      },
    },
    user: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridArea: 'user',
    },
    opponent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridArea: 'opponent',
    },
    graph: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridArea: 'graph',
    },
  }),
);

const renderUserCard = (user: GitHubUser) => {
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
  } = user;

  return (
    <GitHubUserCard
      key={name}
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
};

export const UserFaceOff = () => {
  const [filterText, setFilterText] = useState('');
  const [mainUser, setMainUser] = useState<GitHubUser | null>(null);
  const [otherUser, setOtherUser] = useState<GitHubUser | null>(null);

  const classes = useStyles();

  useEffect(() => {
    if (!mainUser) {
      api.fetchGitHubUsers(['tomxkay']).then(res => {
        const users = res;
        setMainUser(users[0]);
      });
    }

    api.fetchGitHubUsers([filterText]).then(res => {
      const users = res;
      setOtherUser(users[0]);
    });
  }, [filterText]);

  const handleFilterTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFilterText(event.target.value);
  };

  const renderUsersStats = () => {
    if (!mainUser || !otherUser) {
      return null;
    }

    const users: GitHubUser[] = [mainUser, otherUser];

    return <FaceOffResponsiveBar data={users} />;
  };

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <TextField
          id="outlined-search"
          label="Search Github User"
          type="search"
          variant="outlined"
          value={filterText}
          onChange={handleFilterTextChange}
        />
      </div>
      <div className={classes.container}>
        <div className={classes.user}>
          {mainUser ? <div>{renderUserCard(mainUser)}</div> : null}
        </div>
        <div className={`${classes.graph} ${classes.stats}`}>
          {renderUsersStats()}
        </div>
        <div className={classes.opponent}>
          {otherUser ? <div>{renderUserCard(otherUser)}</div> : null}
        </div>
      </div>
    </div>
  );
};
