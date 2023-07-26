import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { projectDetailsById } from '../../config/portfolioProjectDetails';
import { Helmet } from 'react-helmet-async';
import { TITLE_FULL_NAME } from '../../../../shared/config/global';
import Description from './Sections/Description/Description';
import Objectives from './Sections/Objectives/Objectives';
import Decisions from './Sections/Decisions/Decisions';
import Conclusions from './Sections/Conclusions/Conclusions';

/**
 Renders the project details page of the website.
 @function
 @returns {JSX.Element} - Project details page JSX
 */
const ProjectDetails: React.FC = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!projectId || !projectDetailsById[projectId]) {
            navigate('portfolio/projects');
        }
    }, []);

    if (!projectId || !projectDetailsById[projectId]) {
        return null;
    }

    const {
        name,
        description,
        objectives,
        decisions,
        conclusions,
        icon,
        mainScreenShot,
        phoneScreenShot,
        tabletScreenShot,
        work,
        githubUrl,
        websiteUrl
    } = projectDetailsById[projectId];

    return (
        <>
            <Helmet>
                <title>{`${name} | ${TITLE_FULL_NAME}`}</title>
            </Helmet>
            <Description
                name={name}
                description={description}
                icon={icon}
                work={work}
                githubUrl={githubUrl}
                websiteUrl={websiteUrl}
            />
            <Objectives
                objectives={objectives}
                screenshot={mainScreenShot}
            />
            <Decisions
                decisions={decisions}
                screenshot={phoneScreenShot}
            />
            <Conclusions
                conclusions={conclusions}
                screenshot={tabletScreenShot}
            />
        </>
    );
};

export default ProjectDetails;