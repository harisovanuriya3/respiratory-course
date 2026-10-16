import {targetedRemediation} from './targeted-academic-remediation.js';
import {scientificReviewV100} from './scientific-review-v100.js';
import {academicV99} from './academic-v99.js';
import {academicV98} from './academic-v98.js';
import {focusedAcademicV97} from './focused-academic-v97.js';
import {substantiveLessonV95} from './substantive-v95.js';
import {scientificCorrectionsV81} from './scientific-corrections-v81.js';
import {academicV68} from './academic-v68.js';
import {academicV67} from './academic-v67.js';
import {academicV66} from './academic-v66.js';
import {academicV65} from './academic-v65.js';
import {academicV64} from './academic-v64.js';
import {academicCasesV63} from './academic-cases-v63.js';
import {academicV58} from './academic-v58.js';
import {academicV57} from './academic-v57.js';
import {academicV56} from './academic-v56.js';
import {academicDeepeningV55} from './academic-deepening-v55.js';
import {academicRegulationV54} from './academic-regulation-v54.js';
import {physiologyV53} from './physiology-v53.js';
import {physiologyV52} from './physiology-v52.js';
import {physiologyV51} from './physiology-v51.js';
import {advancedPhysiologyV50} from './advanced-physiology-v50.js';
import {extendedLesson} from './extended-lessons-v49.js';
import {deepClinicalLesson} from './deep-clinical-lessons.js';
import {sectionDepthV69} from './section-depth-v69.js';
import {sectionDepthV70} from './section-depth-v70.js';

// One supplementary academic treatment per subsection, instead of dozens of
// overlapping historical drafts. The original lesson, laboratory, and patient
// components are rendered separately and remain available.
const revisions = [scientificReviewV100, academicV99, academicV98, focusedAcademicV97, substantiveLessonV95, scientificCorrectionsV81, academicV68, academicV67, academicV66, academicV65, academicV64, academicCasesV63, academicV58, academicV57, academicV56, academicDeepeningV55, academicRegulationV54, physiologyV53, physiologyV52, physiologyV51, advancedPhysiologyV50, extendedLesson, deepClinicalLesson];
export function curatedAcademic(moduleId, subsection, language) {
  // Reviewed topic-specific replacement for selected weak supplemental sections.
  const corrected = targetedRemediation(moduleId, subsection, language);
  if (corrected) {
    const prior = moduleId === 1 ? sectionDepthV69(moduleId, subsection, language) : (revisions.map(fn=>fn(moduleId, subsection, language)).find(x=>typeof x==='string' && x.trim()) || sectionDepthV70(moduleId, subsection, language));
    const plain = x => x.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
    if (plain(prior).length < 250 && plain(corrected).length > plain(prior).length) return corrected;
  }
  if (moduleId === 1) return sectionDepthV69(moduleId, subsection, language);
  // Specific replacements take precedence over older general explanations.
  for (const revision of revisions) {
    const html = revision(moduleId, subsection, language);
    if (typeof html === 'string' && html.trim()) return html;
  }
  return sectionDepthV70(moduleId, subsection, language);
}
