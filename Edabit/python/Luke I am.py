'''

    Luke, I Am Your ...

    Luke Skywalker has family and friends. Help him remind them who is who.
    Given a string with a name, return the relation of that person to Luke.

    Table:

    Person	Relation

    Darth   Vader	father
    Leia	sister
    Han	    brother in law
    R2D2	droid


    PREP
    Parameters
        String with a name

    Return
        "Luke, I am your " + string with name of relation

    Examples
        relation_to_luke("Darth Vader") ➞ "Luke, I am your father."

        relation_to_luke("Leia") ➞ "Luke, I am your sister."

        relation_to_luke("Han") ➞ "Luke, I am your brother in law."

    Pseudocode
        Recebe name, e verifica como chave de um dicionário sendo a chave seguida pela relação com Luke.
        Retorna string "Luke, I am your" + relation[name]
'''


def relation_to_luke(name):
    relation = {
        'Darth Vader': 'father',
        'Leia': 'sister',
        'Han': 'brother in law',
        'R2D2': 'droid'
    }
    return "Luke, I am your " + relation[name] + "."


print(relation_to_luke("Darth Vader"))
