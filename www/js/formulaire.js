
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#results").style.display = "none";

    const app = new Vue({
        el: '#app',
        data() {
            return {
                questions: [
                    "Pensez-vous que la lutte contre le réchauffement climatique doit prévaloir sur les priorités économiques ?",
                    "Selon vous, L’UE doit-elle obliger les GAFA (Google, Amazon, Facebook, Apple) à stocker leurs données sur le continent européen.",
                    "Pour vous, faut-il rétablir les contrôles aux frontières au sein de l’UE ?",
                    "Reconduction des demandeurs d'asileLes demandeurs d'asile qui tentent de traverser la Méditerranée doivent être reconduits dans leur pays d'origine",
                    "L'Union européenne doit systématiquement sanctionner les États membres qui ne respectent pas les règles de déficit budgétaire.",
                    "L’aide financière accordée aux régions les plus pauvres de l’Union européenne doit être diminuée.",
                    "Il faut rendre l’obtention d’aides sociales plus difficile pour les citoyens européens résidant dans un pays autre que le leur.",
                    "Une égalité salariale stricte entre les hommes et les femmes doit être instaurée au niveau européen.",
                    "L'Union européenne doit encourager ses États membres à légaliser le mariage entre personnes de même sexe.",
                    "Une mobilité obligatoire (Erasmus, service civique, formation) doit être instaurée au niveau européen pour les jeunes."
                ],
                notes: [
                ],
                result: {
                    parti: '',
                    note: ''
                },
                question: '',
                answer: ''
            }
        },
        created() {
            this.question = this.questions.shift()
        },
        
        methods: {
            displayResult() {
                const noteFinal = this.notes.reduce((acc, note) => acc + +note.answer, 0)
                if(noteFinal > 50) {
                    this.result.parti = "La France Insoumise",
                    this.result.note = noteFinal
                }
                else if(noteFinal > 25) {
                    
                    this.result.parti = "Rassemblement national",
                    this.result.note = noteFinal
                }
                else {
                    this.result.parti = "Parti fédéraliste Européen"
                    this.result.note = noteFinal
                }
                document.querySelector('#form').style.display = "none";
                document.querySelector('#results p').innerHTML = `${this.result.parti} est compatible à ${this.result.note}%`;
                document.querySelector('#results').style.display = "block"
            },
            nextQuestion() {
                this.notes.push({question: this.question, answer: this.answer})
                this.question = this.questions.shift()
                this.answer = ''
                if(!this.question) {
                    this.displayResult()
                }
            }
        }
    })
})