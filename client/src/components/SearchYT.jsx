import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Sidebar from '../components/Sidebar';
import '../style/Search.css'
import { getYtSearch, getTwToken, getTwCategoriesByGame } from '../utils/API';
import SearchResultsYT from '../components/SearchResultsYT';