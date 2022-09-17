#!/usr/bin/env python
# coding: utf-8

# In[1]:


import json


# In[95]:


f = open('styles_per_episode_flat.json')
  
# returns JSON object as 
# a dictionary
data = json.load(f)


# In[96]:


data


# In[98]:


all_genres = []
for key in data:
    all_genres.append(data[key])


# In[103]:


genres = list(set(sum(all_genres, [])))
genres[:5]


# In[157]:


data.keys()


# In[165]:


episode_per_genre = dict()

for key in data.keys():
    g_flattened_per_episode = data[key]
    if key == '10':
        print("qui")
    for j in g_flattened_per_episode:
        if j not in episode_per_genre:
            episode_per_genre[j] = []
        episode_per_genre[j].append(key)


# In[166]:


episode_per_genre_sorted = {key: value for key, value in sorted(episode_per_genre.items())}


# In[167]:


print(episode_per_genre_sorted)


# In[ ]:




