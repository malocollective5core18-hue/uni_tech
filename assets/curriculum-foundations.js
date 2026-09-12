(function () {
  'use strict';

  var guides = {
    'algorithms-data-structures': {
      eyebrow: 'Foundation guide', title: 'Algorithms & Data Structures',
      intro: 'Build the habit of choosing a data structure deliberately, explaining its cost, and proving that an implementation works.',
      modules: [
        ['Complexity first', ['Big-O and Big-Theta intuition', 'Time versus space trade-offs', 'Read and compare simple implementations']],
        ['Core structures', ['Arrays, strings, hash maps, sets', 'Stacks, queues, linked lists, trees and heaps', 'Graphs and traversal choices']],
        ['Problem-solving patterns', ['Two pointers, sliding window and recursion', 'Searching, sorting and dynamic programming basics', 'Explain an approach before writing code']]
      ],
      build: 'Implement a searchable contact directory and route planner. Benchmark two approaches, add edge-case tests, and write a short note explaining each complexity choice.'
    },
    'testing-mastery': {
      eyebrow: 'Foundation guide', title: 'Testing Mastery',
      intro: 'Learn to make tests a fast, trustworthy part of delivery rather than a last-minute coverage exercise.',
      modules: [
        ['Test design', ['Unit, integration and end-to-end boundaries', 'Fixtures, factories and deterministic test data', 'Mocks only at external boundaries']],
        ['Confidence in services', ['Test databases and API contract checks', 'Failure paths, permissions and invalid input', 'Regression tests for every fixed defect']],
        ['Delivery discipline', ['Coverage as a signal, not a target', 'CI gates and readable test names', 'Flaky-test diagnosis and removal']]
      ],
      build: 'Ship a small API with unit tests, database integration tests, a contract test, and a CI workflow that runs them on every pull request.'
    },
    'typescript-mastery': {
      eyebrow: 'Foundation guide', title: 'TypeScript Mastery',
      intro: 'Use TypeScript strictly while still validating every value that comes from users, storage, and remote APIs.',
      modules: [
        ['Strict foundations', ['Strict compiler settings and inference', 'Narrowing unknown data safely', 'Unions, discriminated unions and exhaustive checks']],
        ['Reusable types', ['Generics and utility types', 'Schema-based API validation', 'Model errors as typed states']],
        ['React application', ['Typed props, hooks and events', 'Server state versus client state', 'Runtime validation at the API boundary']]
      ],
      build: 'Convert a JavaScript form to strict TypeScript, validate its API responses at runtime, and include loading, error, retry, and empty states.'
    },
    'http-api-mastery': {
      eyebrow: 'Foundation guide', title: 'HTTP & API Mastery',
      intro: 'Understand the web contract beneath every frontend and backend framework.',
      modules: [
        ['HTTP essentials', ['Methods, status codes, headers and content types', 'Cookies, sessions and caching', 'Request lifecycle and observability']],
        ['API design', ['REST resources, pagination and filtering', 'Idempotency keys and safe retries', 'Versioning and compatible changes']],
        ['Browser security', ['CORS, CSRF and credentials', 'Authn versus authz at each endpoint', 'Useful error responses without leaking secrets']]
      ],
      build: 'Design and document a paginated inventory API, then implement request validation, idempotent create requests, auth checks, and contract tests.'
    },
    'sql-database-mastery': {
      eyebrow: 'Foundation guide', title: 'SQL & Database Mastery',
      intro: 'Model durable data, query it efficiently, and change it without losing integrity.',
      modules: [
        ['Data modelling', ['Entities, relationships and normalization', 'Primary keys, foreign keys and constraints', 'PostgreSQL types and migrations']],
        ['Querying well', ['Joins, aggregates, subqueries and CTEs', 'Indexes and reading query plans', 'Pagination and filtering that scale']],
        ['Safe operations', ['Transactions and isolation levels', 'Backups, restores and migration rollback plans', 'Data validation at database and application layers']]
      ],
      build: 'Create a PostgreSQL schema for orders, write reporting queries, prove a stock update is transactional, and document an index choice using EXPLAIN.'
    },
    'docker-cicd-mastery': {
      eyebrow: 'Production guide', title: 'Docker & CI/CD Mastery',
      intro: 'Package software consistently and promote changes through automated, reviewable delivery steps.',
      modules: [
        ['Containers', ['Small Dockerfiles and multi-stage builds', 'Compose for local dependencies', 'Image security, non-root users and secrets']],
        ['Continuous integration', ['Lint, test and build on every pull request', 'Artifacts, dependency updates and required checks', 'Secrets kept in the CI platform, never the repository']],
        ['Deployment', ['Environment configuration and migrations', 'Release tags, rollback paths and deployment checks', 'Post-deploy smoke tests']]
      ],
      build: 'Containerize a service, run it with PostgreSQL in Compose, and add a CI pipeline that tests, builds an image, and documents a rollback procedure.'
    },
    'production-operations': {
      eyebrow: 'Production guide', title: 'Production Operations',
      intro: 'Operate software deliberately: know when it is healthy, how users are affected, and how to recover safely.',
      modules: [
        ['Signals', ['Structured logs, metrics and traces', 'Health and readiness endpoints', 'Dashboards, alerts, SLOs and error budgets']],
        ['Reliability', ['Timeouts, retries, backoff and circuit breakers', 'Backups and restore drills', 'Capacity, latency and dependency failures']],
        ['Incident practice', ['Triage, communication and evidence collection', 'Runbooks and safe rollback', 'Blameless post-incident improvements']]
      ],
      build: 'Add health checks and structured logging to an app, define two actionable alerts, simulate an outage, and produce an incident report plus runbook update.'
    },
    'web-security-mastery': {
      eyebrow: 'Production guide', title: 'Web Security Mastery',
      intro: 'Treat security as a set of engineering controls across design, code, dependencies, and operations.',
      modules: [
        ['Threat modelling', ['Assets, actors, trust boundaries and abuse cases', 'OWASP risks in practical web flows', 'Security requirements before implementation']],
        ['Identity and input', ['Authentication, authorization and least privilege', 'Passwords, sessions, OAuth and secure cookies', 'Validation, output encoding and injection prevention']],
        ['Defence in depth', ['CSRF, CORS, XSS, SSRF and file upload safety', 'Dependency auditing and secret management', 'Logging, incident response and disclosure hygiene']]
      ],
      build: 'Threat-model a document upload feature, implement safe validation and authorization, then test path traversal, XSS, CSRF, and unauthorized access attempts.'
    },
    'software-design-maintainability': {
      eyebrow: 'Production guide', title: 'Software Design & Maintainability',
      intro: 'Make code easier to change by giving responsibilities clear boundaries and recording important trade-offs.',
      modules: [
        ['Design principles', ['Cohesion, coupling and modular boundaries', 'Dependency direction and interfaces', 'Domain errors instead of ambiguous failures']],
        ['Change safely', ['Refactoring with characterization tests', 'API contracts and backwards compatibility', 'Code review focused on risk and clarity']],
        ['Team knowledge', ['Architecture decision records', 'Useful naming, documentation and runbooks', 'Managing technical debt intentionally']]
      ],
      build: 'Refactor a tightly coupled feature behind clear interfaces, preserve behavior with tests, and write an ADR explaining the chosen boundary and trade-offs.'
    },
    'junior-production-capstone': {
      eyebrow: 'Final capstone', title: 'Junior Production Capstone',
      intro: 'Bring the full curriculum together in one deployable, observable, secure application.',
      modules: [
        ['Build', ['A web UI, API, PostgreSQL and background worker', 'Authentication, role/object authorization and validation', 'Documented API contracts and migrations']],
        ['Assure', ['Unit, integration, browser and contract tests', 'Strict typing, accessibility and error states', 'Security review and dependency audit']],
        ['Operate', ['Docker Compose, CI, deployment and rollback', 'Logs, metrics, health checks and alert plan', 'Incident simulation and release notes']]
      ],
      build: 'Deliver a production-style service with a public README, architecture diagram, threat model, test suite, CI pipeline, deployment steps, rollback plan, and a short demo recording.'
    }
  };

  var key = document.body.getAttribute('data-guide');
  var guide = guides[key];
  if (!guide) return;
  document.title = guide.title + ' — UniTech';
  var codeViews = [
    ['01 · Input validation', 'python', 'def validate_order(payload):\n    if not payload.get("items"):\n        raise ValueError("items are required")\n    return payload', 'Reject invalid data before it reaches business logic.'],
    ['02 · API request', 'javascript', 'const response = await fetch("/api/orders");\nif (!response.ok) {\n  throw new Error(`Request failed: ${response.status}`);\n}\nconst orders = await response.json();', 'Treat network responses as fallible input.'],
    ['03 · Error boundary', 'python', 'try:\n    result = service.execute(command)\nexcept DomainError as error:\n    logger.warning("command_rejected", extra={"reason": str(error)})\n    return {"error": str(error)}', 'Translate expected domain failures into useful responses.'],
    ['04 · Database query', 'sql', 'SELECT customer_id, COUNT(*) AS order_count\nFROM orders\nWHERE created_at >= CURRENT_DATE - INTERVAL \'30 days\'\nGROUP BY customer_id\nORDER BY order_count DESC;', 'Ask the database for grouped results instead of looping in application code.'],
    ['05 · Automated test', 'python', 'def test_rejects_empty_order(client):\n    response = client.post("/orders", json={"items": []})\n    assert response.status_code == 400\n    assert response.json()["error"] == "items are required"', 'Make an important failure path executable and repeatable.'],
    ['06 · Responsive CSS', 'css', '.card {\n  display: grid;\n  grid-template-columns: 12rem 1fr;\n  gap: 1rem;\n}\n\n@container (max-width: 30rem) {\n  .card { grid-template-columns: 1fr; }\n}', 'Let a component adapt to its available space.'],
    ['07 · CI quality gate', 'yaml', 'name: verify\non: [pull_request]\njobs:\n  checks:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci\n      - run: npm test -- --runInBand', 'Run the same quality checks for every proposed change.'],
    ['08 · Safe retry', 'python', 'for attempt in range(3):\n    try:\n        return provider.send(message, idempotency_key=key)\n    except TemporaryFailure:\n        if attempt == 2:\n            raise\n        time.sleep(2 ** attempt)', 'Retry temporary failures only when the operation is idempotent.'],
    ['09 · Authorization', 'python', 'def can_edit(user, document):\n    return (\n        user.is_authenticated\n        and document.owner_id == user.id\n    )', 'Check the object being accessed, not only whether a user is logged in.'],
    ['10 · Structured logging', 'javascript', 'logger.info("order_created", {\n  orderId,\n  userId,\n  requestId,\n  durationMs\n});', 'Record searchable facts that help diagnose production behavior.'],
    ['11 · Accessible control', 'html', '<button type="button" aria-expanded="false"\n        aria-controls="filters">\n  Show filters\n</button>\n<section id="filters" hidden>...</section>', 'Give interactive controls a usable name and state.'],
    ['12 · Rollback guard', 'bash', 'set -euo pipefail\n./migrate --check\n./deploy --version "$RELEASE"\n./smoke-test https://app.example.com\n./rollback --to "$LAST_GOOD"', 'Make deployment verification and recovery explicit.']
  ];
  var modules = guide.modules.map(function (module, index) {
    var items = module[1].map(function (item, itemIndex) {
      var id = key + '-' + index + '-' + itemIndex;
      return '<li><label><input type="checkbox" data-progress="' + id + '"><span>' + item + '</span></label></li>';
    }).join('');
    return '<article class="module"><span class="number">0' + (index + 1) + '</span><h2>' + module[0] + '</h2><ul>' + items + '</ul></article>';
  }).join('');
  document.head.insertAdjacentHTML('beforeend', '<style>\
    :root{color-scheme:dark;--bg:#0b1018;--panel:#141d2b;--panel-2:#192537;--line:#2a3a51;--text:#edf4ff;--muted:#a9b7ca;--accent:#79d2be;--accent-2:#f2bd68;--ok:#8ee0a8}\
    *{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at 85% 0%,#173345 0,transparent 36rem),var(--bg);color:var(--text);font:16px/1.65 Inter,system-ui,sans-serif}main{max-width:1100px;margin:auto;padding:32px 24px 80px}.topline{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}.back{color:var(--accent);text-decoration:none}.eyebrow,.number{color:var(--accent);text-transform:uppercase;letter-spacing:.12em;font-size:.75rem;font-weight:700}.eyebrow{margin-top:46px}h1{max-width:850px;font-size:clamp(2.5rem,7vw,5.6rem);line-height:.98;margin:20px 0}.intro{max-width:740px;color:var(--muted);font-size:1.12rem}.progress{min-width:210px;background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:10px 12px;font:12px ui-monospace,monospace;color:var(--muted)}.track{height:7px;background:#0b111a;border-radius:99px;overflow:hidden;margin-top:8px}.fill{height:100%;width:0;background:linear-gradient(90deg,var(--accent),var(--accent-2));transition:width .25s}.filter{width:100%;margin-top:30px;background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:12px 14px;color:var(--text);font:inherit}.code-lab{margin:28px 0;background:linear-gradient(145deg,#122a34,#141d2b);border:1px solid #397b70;border-radius:16px;padding:22px}.code-lab-head{display:flex;justify-content:space-between;align-items:end;gap:18px;flex-wrap:wrap}.code-lab h2{margin:6px 0 0;font-size:1.45rem}.code-lab .eyebrow{margin:0}.code-lab label{color:var(--muted);font-size:.82rem}.code-lab select{display:block;margin-top:6px;min-width:250px;background:#0b111a;color:var(--text);border:1px solid #397b70;border-radius:7px;padding:9px;font:inherit}.code-lab p{color:var(--muted);margin:16px 0}.code-lab pre{margin:0;padding:18px;background:#080d14;border:1px solid #2a3a51;border-radius:10px;overflow:auto;min-height:170px}.code-lab code{font:13px/1.65 ui-monospace,SFMono-Regular,Consolas,monospace;color:#d8f5ee;white-space:pre}.code-result{margin-top:14px;color:var(--muted);font-size:.9rem}.code-result strong{color:var(--accent)}.modules{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:22px 0 28px}.module,.build{background:linear-gradient(145deg,var(--panel),#111925);border:1px solid var(--line);border-radius:14px;padding:22px}.module h2{margin:8px 0 14px;font-size:1.35rem}.module ul{list-style:none;padding:0;margin:0}.module li{border-top:1px solid #ffffff0d;padding:11px 0}.module label{display:flex;gap:10px;align-items:flex-start;color:var(--muted);cursor:pointer}.module input{accent-color:var(--accent);margin-top:5px;flex:0 0 auto}.module input:checked+span{color:#728197;text-decoration:line-through}.build{border-color:#397b70;background:linear-gradient(135deg,#102a2c,#152234)}.build h2{margin:8px 0}.build p{font-size:1.05rem;color:var(--text)}.build .deliver{display:flex;gap:10px;align-items:flex-start;margin-top:18px;color:var(--muted)}.build input{accent-color:var(--ok);margin-top:5px}@media(max-width:820px){.modules{grid-template-columns:1fr 1fr}}@media(max-width:560px){main{padding:24px 16px 60px}.modules{grid-template-columns:1fr}.code-lab select{min-width:0;width:100%}h1{font-size:clamp(2.5rem,15vw,4rem)}}\
  </style>');
  document.body.innerHTML = '<main><div class="topline"><a class="back" href="../index.html">&larr; Back to the UniTech library</a><div class="progress"><span id="progress-label">0% complete</span><div class="track"><div class="fill" id="progress-fill"></div></div></div></div><p class="eyebrow">' + guide.eyebrow + '</p><h1>' + guide.title + '</h1><p class="intro">' + guide.intro + '</p><input class="filter" id="filter" type="search" placeholder="Filter modules and outcomes..." aria-label="Filter modules and outcomes"><section class="code-lab"><div class="code-lab-head"><div><span class="eyebrow">Code lab</span><h2>Choose a working pattern</h2></div><label>View<select id="code-view"></select></label></div><p id="code-note"></p><pre><code id="code-output"></code></pre><div class="code-result"><strong>Why this matters:</strong> <span id="code-result-text"></span></div></section><section class="modules">' + modules + '</section><section class="build"><span class="eyebrow">Mastery build</span><h2>Prove it in a real workflow</h2><p>' + guide.build + '</p><label class="deliver"><input id="build-check" type="checkbox"><span>I can explain the design, show the working artifact, and describe how I verified it.</span></label></section></main>';
  var checkboxes = Array.prototype.slice.call(document.querySelectorAll('[data-progress]'));
  var buildCheck = document.getElementById('build-check');
  var storageKey = 'unitech-progress-' + key;
  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (error) {}
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = saved[checkbox.dataset.progress] === true;
    checkbox.addEventListener('change', updateProgress);
  });
  buildCheck.addEventListener('change', updateProgress);
  document.getElementById('filter').addEventListener('input', function (event) {
    var query = event.target.value.toLowerCase();
    document.querySelectorAll('.module').forEach(function (module) {
      module.hidden = query && module.textContent.toLowerCase().indexOf(query) === -1;
    });
  });
  var codeSelect = document.getElementById('code-view');
  var codeOutput = document.getElementById('code-output');
  var codeNote = document.getElementById('code-note');
  var codeResult = document.getElementById('code-result-text');
  codeViews.forEach(function (view, index) {
    var option = document.createElement('option');
    option.value = index;
    option.textContent = view[0];
    codeSelect.appendChild(option);
  });
  function showCodeView() {
    var view = codeViews[Number(codeSelect.value)];
    codeOutput.textContent = view[2];
    codeOutput.dataset.language = view[1];
    codeNote.textContent = view[0] + ' · ' + view[1];
    codeResult.textContent = view[3];
  }
  codeSelect.addEventListener('change', showCodeView);
  showCodeView();
  function updateProgress() {
    var complete = checkboxes.filter(function (checkbox) { return checkbox.checked; }).length + (buildCheck.checked ? 1 : 0);
    var total = checkboxes.length + 1;
    var percent = Math.round(complete / total * 100);
    var state = {};
    checkboxes.forEach(function (checkbox) { state[checkbox.dataset.progress] = checkbox.checked; });
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (error) {}
    document.getElementById('progress-label').textContent = percent + '% complete';
    document.getElementById('progress-fill').style.width = percent + '%';
  }
  updateProgress();
})();
