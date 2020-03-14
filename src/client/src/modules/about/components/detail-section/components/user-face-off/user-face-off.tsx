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
        width: 200,
      },
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    search: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    stats: {
      height: '500px',
      width: '500px',
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

  console.info('user in render user card is', user);

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
      console.info('gonna render mainuser');
      api.fetchGitHubUsers(['tomxkay']).then(res => {
        const users = res;
        setMainUser(users[0]);
      });
    }

    if (!otherUser) {
      console.info('gonna render otheruser');
      api.fetchGitHubUsers(['mdawsondev']).then(res => {
        const users = res;
        setOtherUser(users[0]);
      });
    }
  });

  const handleFilterTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFilterText(event.target.value);
  };

  const renderUsersStats = () => {
    if (!mainUser || !otherUser) {
      return null;
    }

    return (
      <div className={classes.stats}>
        <FaceOffResponsiveBar data={[]} />
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <TextField
          id="outlined-search"
          label="search field"
          type="search"
          variant="outlined"
          value={filterText}
          onChange={handleFilterTextChange}
        />
      </div>
      <div className={classes.container}>
        {mainUser ? <div>{renderUserCard(mainUser)}</div> : null}
        {renderUsersStats()}
        {otherUser ? <div>{renderUserCard(otherUser)}</div> : null}
      </div>
    </div>
  );
};
