import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, TextField, List, ListItem, ListItemText, IconButton, CardMedia } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CandidateCards from './candidates/CandidateCards';

const articles = [
  { 
    id: 1, 
    title: 'Learn about the most in-demand languages', 
    content: 'Python\'s widespread use in emerging technologies and its status as a leading programming language are well-documented by Stack Overflow\'s Developer Survey, which consistently ranks it highly for its popularity and ease of learning (Stack Overflow, 2023).\n\nJavaScript\'s critical role in web development, especially in building interactive user interfaces, is highlighted in the annual Stack Overflow Developer Survey, reinforcing its position as an essential tool for front-end developers (Stack Overflow, 2023).Java\'s prominence in enterprise environments and Android development is supported by data from the TIOBE Index, which tracks the popularity of programming languages based on skilled engineer world-wide, courses, and third-party vendors (TIOBE, 2023)', 
    imageUrl: './photo/homepage_photos/community1.jpg' 
  },
  { 
    id: 2, 
    title: 'Check out these candidate statistics', 
    content: '', 
    imageUrl: './photo/homepage_photos/community2.jpg' 
  },
  { 
    id: 3, 
    title: 'Here is how the woman changed her resume', 
    content: 'Customize Content: Adjust your resume to align with the specific requirements of the job you\'re applying for. Highlight relevant skills and experiences that match the job description. \n\n Keywords: Use keywords from the job description. Many companies use Applicant Tracking Systems (ATS) that scan for these keywords, so including them can help ensure your resume gets noticed.', 
    imageUrl: './photo/homepage_photos/community3.jpg' 
  },
];

const NewsComponent = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [comments, setComments] = useState({});
  const [commentText, setCommentText] = useState('');
  const [editingCommentIndex, setEditingCommentIndex] = useState(null);
  const [editingCommentText, setEditingCommentText] = useState('');
  const [skillsData, setSkillsData] = useState({});

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() === '') return;

    setComments((prevComments) => ({
      ...prevComments,
      [selectedArticle.id]: [...(prevComments[selectedArticle.id] || []), commentText],
    }));
    setCommentText('');
  };

  const handleEditCommentChange = (event) => {
    setEditingCommentText(event.target.value);
  };

  const handleEditCommentSubmit = () => {
    if (editingCommentText.trim() === '') return;

    setComments((prevComments) => {
      const updatedComments = [...prevComments[selectedArticle.id]];
      updatedComments[editingCommentIndex] = editingCommentText;
      return {
        ...prevComments,
        [selectedArticle.id]: updatedComments,
      };
    });
    setEditingCommentIndex(null);
    setEditingCommentText('');
  };

  const handleEditClick = (index) => {
    setEditingCommentIndex(index);
    setEditingCommentText(comments[selectedArticle.id][index]);
  };

  const handleDeleteClick = (index) => {
    setComments((prevComments) => {
      const updatedComments = prevComments[selectedArticle.id].filter((_, i) => i !== index);
      return {
        ...prevComments,
        [selectedArticle.id]: updatedComments,
      };
    });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
      <Box sx={{ width: '40%', marginRight: 2 }}>
        <Typography variant="h4" gutterBottom component="h2">Hot topics in our community!</Typography>
        {articles.map((article) => (
          <Card key={article.id} sx={{ marginBottom: 2 }} component="article" aria-labelledby={`article-title-${article.id}`}>
            <CardMedia
              component="img"
              height="300"
              image={article.imageUrl}
              alt={article.title}
            />
            <CardContent>
              <Typography id={`article-title-${article.id}`} variant="h5" component="h3">{article.title}</Typography>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ marginTop: 1 }} 
                onClick={() => handleArticleClick(article)}
                endIcon={<CommentIcon />}
                aria-label={`View and comment on ${article.title}`}
              >
                View and Comment
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ width: '50%' }}>
        {selectedArticle ? (
          <>
            <Typography variant="h4" gutterBottom component="h3">{selectedArticle.title}</Typography>
            {selectedArticle.id === 2 ? (
              <table aria-label="Skills statistics">
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(skillsData).map(([skill, count]) => (
                    <tr key={skill}>
                      <td>{skill}</td>
                      <td>{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Typography variant="body1" paragraph>{selectedArticle.content}</Typography>
            )}
            <Typography variant="h6" component="h4">Comments</Typography>
            <List aria-label="Comments list">
              {(comments[selectedArticle.id] || []).map((comment, index) => (
                <ListItem key={index} secondaryAction={
                  <Box>
                    <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(index)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                }>
                  <ListItemText primary={comment} />
                </ListItem>
              ))}
            </List>
            {editingCommentIndex !== null ? (
              <>
                <TextField
                  label="Edit comment"
                  multiline
                  rows={4}
                  value={editingCommentText}
                  onChange={handleEditCommentChange}
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: 2, marginBottom: 2 }}
                  aria-label="Edit comment"
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handleEditCommentSubmit}
                  aria-label="Submit edited comment"
                >
                  Submit Edit
                </Button>
              </>
            ) : (
              <>
                <TextField
                  label="Add a comment"
                  multiline
                  rows={4}
                  value={commentText}
                  onChange={handleCommentChange}
                  variant="outlined"
                  fullWidth
                  sx={{ marginTop: 2, marginBottom: 2 }}
                  aria-label="Add a comment"
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handleCommentSubmit}
                  aria-label="Submit comment"
                >
                  Submit Comment
                </Button>
              </>
            )}
          </>
        ) : (
          <Typography variant="h6" component="h4">Select an article to view and comment.</Typography>
        )}
      </Box>
      <CandidateCards setSkillsData={setSkillsData} displayCards={false} />
    </Box>
  );
};

export default NewsComponent;
