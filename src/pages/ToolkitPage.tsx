import { useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AccessibleVideo from '../components/AccessibleVideo';
import Collapsible from '../components/Collapsible';
import { crimeDescriptions } from '../data/crimeDescriptions';
import {
  getCrimeType,
  getReportingCategory,
  isQuestionnaireComplete,
  moneySituationOptions,
  noMoneySituationOptions,
  platformOptions,
  questionOneOptions,
  type MoneyOption,
  type NoMoneyOption,
  type QuestionnaireAnswers,
} from '../data/questionnaire';
import { reportingSections } from '../data/reportingGuides';
import { usePageTitle } from '../hooks/usePageTitle';

const initialAnswers: QuestionnaireAnswers = {
  involvesMoney: null,
  situation: null,
  platform: null,
};

export default function ToolkitPage() {
  usePageTitle('Toolkit');
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(initialAnswers);
  const resultsRef = useRef<HTMLDivElement>(null);
  const resultsHeadingRef = useRef<HTMLHeadingElement>(null);
  const formId = useId();
  const complete = isQuestionnaireComplete(answers);
  const crimeType = getCrimeType(answers.situation);
  const reportingCategory = getReportingCategory(answers.platform);
  const crime = crimeType ? crimeDescriptions[crimeType] : null;
  const reporting = reportingCategory ? reportingSections[reportingCategory] : null;

  const situationOptions =
    answers.involvesMoney === 'money'
      ? moneySituationOptions
      : answers.involvesMoney === 'no-money'
        ? noMoneySituationOptions
        : [];

  useEffect(() => {
    if (complete && resultsHeadingRef.current) {
      resultsHeadingRef.current.focus();
    }
  }, [complete, crimeType, reportingCategory]);

  function updateAnswer<K extends keyof QuestionnaireAnswers>(
    key: K,
    value: QuestionnaireAnswers[K],
  ) {
    setAnswers((current) => {
      if (key === 'involvesMoney') {
        return { involvesMoney: value as QuestionnaireAnswers['involvesMoney'], situation: null, platform: current.platform };
      }
      if (key === 'situation') {
        return { ...current, situation: value as QuestionnaireAnswers['situation'] };
      }
      return { ...current, [key]: value };
    });
  }

  function resetQuestionnaire() {
    setAnswers(initialAnswers);
    document.getElementById(`${formId}-q1`)?.focus();
  }

  return (
    <div className="page toolkit-page">
      <section className="toolkit-intro" aria-labelledby="toolkit-intro-heading">
        <h1 id="toolkit-intro-heading">Toolkit</h1>
        <p>
          Are you dealing with a possible cybercrime incident? Don&apos;t worry, help is here. This
          toolkit will guide you through three simple questions to help you understand what happened
          and how to report it the right way.
        </p>
        <p>
          Got suggestions or feedback to improve this toolkit? We&apos;d love to hear from you.
          Email us at <a href="mailto:inquire@atriev.org">inquire@atriev.org</a>.
        </p>
      </section>

      <div className="toolkit-layout">
        <section
          className="questionnaire-panel"
          aria-labelledby="questionnaire-heading"
          aria-describedby="questionnaire-help"
        >
          <h2 id="questionnaire-heading">Answer These Questions</h2>
          <p id="questionnaire-help">
            Use Tab to move between questions. After you finish all three, your personalized
            guidance will appear on the right (or below on smaller screens).
          </p>

          <form
            className="questionnaire-form"
            onSubmit={(event) => event.preventDefault()}
            aria-label="Cybercrime identification questionnaire"
          >
            <fieldset className="question-fieldset">
              <legend id={`${formId}-q1`}>Question 1: What is happening to you right now?</legend>
              {questionOneOptions.map((option) => (
                <label key={option.value} className="radio-option">
                  <input
                    type="radio"
                    name="involves-money"
                    value={option.value}
                    checked={answers.involvesMoney === option.value}
                    onChange={() => updateAnswer('involvesMoney', option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </fieldset>

            {answers.involvesMoney && (
              <fieldset className="question-fieldset">
                <legend>
                  Question 2: What is the person asking you to do or doing to you?
                </legend>
                {situationOptions.map((option) => (
                  <label key={option.value} className="radio-option">
                    <input
                      type="radio"
                      name="situation"
                      value={option.value}
                      checked={answers.situation === option.value}
                      onChange={() =>
                        updateAnswer(
                          'situation',
                          option.value as MoneyOption | NoMoneyOption,
                        )
                      }
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </fieldset>
            )}

            {answers.situation && (
              <fieldset className="question-fieldset">
                <legend>Question 3: Where is this happening?</legend>
                {platformOptions.map((option) => (
                  <label key={option.value} className="radio-option">
                    <input
                      type="radio"
                      name="platform"
                      value={option.value}
                      checked={answers.platform === option.value}
                      onChange={() => updateAnswer('platform', option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </fieldset>
            )}

            {complete && (
              <button type="button" className="button-secondary" onClick={resetQuestionnaire}>
                Start over with new answers
              </button>
            )}
          </form>
        </section>

        <section
          ref={resultsRef}
          className="results-panel"
          aria-labelledby="results-heading"
          aria-live="polite"
          aria-relevant="additions text"
        >
          {!complete && (
            <>
              <h2 id="results-heading">Your Guidance Will Appear Here</h2>
              <p>
                Complete all three questions to see a description of the likely cybercrime type and
                step-by-step reporting instructions for your platform.
              </p>
            </>
          )}

          {complete && crime && reporting && (
            <>
              <h2 id="results-heading" ref={resultsHeadingRef} tabIndex={-1}>
                Your Results
              </h2>
              <p className="results-summary" role="status">
                Based on your answers, this situation is most likely related to{' '}
                <strong>{crime.title}</strong> on <strong>{reporting.title}</strong>.
              </p>

              <article className="crime-description" aria-labelledby="crime-title">
                <h3 id="crime-title">{crime.title}</h3>
                {crime.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </article>

              <section className="reporting-section" aria-labelledby="reporting-heading">
                <h3 id="reporting-heading">How to Report</h3>
                <p>{reporting.intro}</p>

                {reporting.guides.map((guide) => (
                  <Collapsible key={guide.id} title={guide.title}>
                    {guide.intro && <p>{guide.intro}</p>}
                    {guide.hotline && (
                      <p>
                        Hotline:{' '}
                        <a href={`tel:${guide.hotline.replace(/\s/g, '')}`}>{guide.hotline}</a>
                      </p>
                    )}
                    {guide.steps && (
                      <ol>
                        {guide.steps.map((step) => (
                          <li key={step.slice(0, 40)}>{step}</li>
                        ))}
                      </ol>
                    )}
                    {guide.notes?.map((note) => (
                      <p key={note.slice(0, 40)}>{note}</p>
                    ))}
                    {guide.videoLabel && (
                      <AccessibleVideo title={guide.videoLabel} src={guide.videoSrc} />
                    )}
                  </Collapsible>
                ))}
              </section>

              <p>
                For official agency contacts, visit the <Link to="/contacts">Contacts page</Link>.
              </p>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
